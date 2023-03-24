import React, { useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';
import { Essay } from '../../types';
import { FlatList } from "react-native-gesture-handler";
import { graphqlOperation, navItem, API } from "aws-amplify";
import { listEssays } from '../../src/graphql/queries';
import EssayListItem from '../EssayListItem'

export type EssaySearchBarProps = {

}

const EssaySearchBar = (props: EssaySearchBarProps) => {

    const [query, setQuery] = React.useState('');
    const [filteredData, setFilteredData] = React.useState([]);

    const EssayView = ({essay}) => {
        return (
            <Text style={styles.essayStyle}>
                {essay.name.toUpperCase()}
            </Text>
        )
    }

    const ItemSeperatorView = () => {
        return (
            <View
                style={{height: 0.5, width: '100%', backgroundColor: '#c8c8c8'}}
            />
        )
    }

    useEffect(() => {
        const fetchFilteredEssays = async () => {
            try {
                if (query.length >= 3) {
                    const data = await API.graphql(graphqlOperation(listEssays, {
                        filter: {
                            name: { contains: query.toLowerCase().replace(' ', '_') }
                        }
                    }));
                    setFilteredData(data.data.listEssays.items);
                } else {
                    setFilteredData([]);
                }
            } catch (e) {
                console.log(e);
            }
        }

        fetchFilteredEssays();
    }, [query])

    return (
        <View style={styles.container} >
            <TextInput
                onChangeText={(text) => setQuery(text)}
                placeholder='Whatcha wanna learn'
                value={query}
                style={styles.searchBar}
            />
            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id}
                // ItemSeparatorComponent={ItemSeperatorView}
                renderItem={({item}) => <EssayListItem essay={item} author={item.author} />}
            />
        </View>
    )

}

export default EssaySearchBar;
