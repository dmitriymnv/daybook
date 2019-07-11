import React, { PureComponent } from 'react';
import { Text, View, Animated, ScrollView, StyleSheet } from 'react-native';
import { Constants } from 'expo';

/* В случае скролла вниз\вверх на высоту хедера больше половины, 
то он скрывается\показывается */

interface Props {}

interface IState {
    scrollAnim: Animated.Value;
    offsetAnim: Animated.Value;
    clampedScroll: Animated.AnimatedDiffClamp;
}

const NAVBAR_HEIGHT = 64;
const STATUS_BAR_HEIGHT = Constants.statusBarHeight;

export default class HidingHeaderScroll extends PureComponent<Props, IState> {
    private clampedScrollValue: number = 0;
    private offsetValue: number = 0;
    private scrollValue: number = 0;
    private AnimatedListView: typeof ScrollView = Animated.createAnimatedComponent(
        ScrollView
    );
    private scrollEndTimer!: number;

    private scrollAnim: Animated.Value = new Animated.Value(0);
    private offsetAnim: Animated.Value = new Animated.Value(0);

    state = {
        scrollAnim: this.scrollAnim,
        offsetAnim: this.offsetAnim,
        clampedScroll: Animated.diffClamp(
            Animated.add(
                this.scrollAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                    extrapolateLeft: 'clamp'
                }),
                this.offsetAnim
            ),
            0,
            NAVBAR_HEIGHT - STATUS_BAR_HEIGHT
        )
    };

    componentDidMount() {
        this.state.scrollAnim.addListener(({ value }) => {
            const diff = value - this.scrollValue;
            this.scrollValue = value;
            this.clampedScrollValue = Math.min(
                Math.max(this.clampedScrollValue + diff, 0),
                NAVBAR_HEIGHT - STATUS_BAR_HEIGHT
            );
        });
        this.state.offsetAnim.addListener(({ value }) => {
            this.offsetValue = value;
        });
    }

    componentWillUnmount() {
        this.state.scrollAnim.removeAllListeners();
        this.state.offsetAnim.removeAllListeners();
    }

    private onScrollEndDrag = () => {
        this.scrollEndTimer = setTimeout(this.onMomentumScrollEnd, 250);
    };

    private onMomentumScrollBegin = () => {
        clearTimeout(this.scrollEndTimer);
    };

    private onMomentumScrollEnd = () => {
        const toValue =
            this.scrollValue > NAVBAR_HEIGHT &&
            this.clampedScrollValue > (NAVBAR_HEIGHT - STATUS_BAR_HEIGHT) / 2
                ? this.offsetValue + NAVBAR_HEIGHT
                : this.offsetValue - NAVBAR_HEIGHT;
        Animated.timing(this.state.offsetAnim, {
            toValue,
            duration: 350,
            useNativeDriver: true
        }).start();
    };

    render() {
        const { clampedScroll } = this.state;
        const navbarTranslate = clampedScroll.interpolate({
            inputRange: [0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
            outputRange: [0, -(NAVBAR_HEIGHT - STATUS_BAR_HEIGHT)],
            extrapolate: 'clamp'
        });

        return (
            <View style={styles.fill}>
                <Animated.View
                    style={[
                        styles.navbar,
                        {
                            transform: [
                                {
                                    translateY: navbarTranslate
                                }
                            ]
                        }
                    ]}
                >
                    <Text>Пример хедера</Text>
                </Animated.View>
                <this.AnimatedListView
                    contentContainerStyle={styles.contentContainer}
                    onMomentumScrollBegin={this.onMomentumScrollBegin}
                    onMomentumScrollEnd={this.onMomentumScrollEnd}
                    onScrollEndDrag={this.onScrollEndDrag}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: { y: this.state.scrollAnim }
                                }
                            }
                        ],
                        { useNativeDriver: true }
                    )}
                >
                    {this.props.children}
                </this.AnimatedListView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fill: {
        flex: 1
    },
    navbar: {
        position: 'absolute',
        top: -Constants.statusBarHeight,
        left: 0,
        right: 0,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderBottomColor: '#dedede',
        borderBottomWidth: 1,
        height: NAVBAR_HEIGHT,
        justifyContent: 'center',
        paddingTop: STATUS_BAR_HEIGHT
    },
    contentContainer: {
        paddingTop: NAVBAR_HEIGHT
    },
    title: {
        color: '#333333'
    }
});
