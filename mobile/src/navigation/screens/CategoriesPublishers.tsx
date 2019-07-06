import React, { Component } from 'react';
import { NavigationScreenProp } from 'react-navigation';

import Journals from '../../components/journals';
import { categoriesList } from '../../constants/App';

interface CategoriesJournalsScreenProps {
    navigation: NavigationScreenProp<any>;
}

class CategoriesJournalsScreen extends Component<
    CategoriesJournalsScreenProps
> {
    static navigationOptions = ({
        navigation: {
            state: {
                params: { categories, publishers }
            }
        }
    }: {
        navigation: {
            state: { params: { categories?: number; publishers?: string } };
        };
    }) => {
        const isCategories = categories !== undefined;

        const renderHeader = () => {
            if (isCategories) {
                const findCategories:
                    | { text: string }
                    | undefined = categoriesList.find(
                    ({ id }) => categories === id
                );
                return findCategories
                    ? findCategories.text
                    : 'Ошибка в выборе категории';
            } else {
                return publishers;
            }
        };

        return {
            title: `${
                isCategories ? `Категория` : `Издатель`
            } - ${renderHeader()}`
        };
    };

    render() {
        const categories = this.props.navigation.getParam('categories');
        const publishers = this.props.navigation.getParam('publishers');
        return <Journals options={{ categories, publishers }} />;
    }
}

export default CategoriesJournalsScreen;
