import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const FlatListTut = () => {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb8ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91a97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-15571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3a1-47bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbeac1b1-46c2-aed5-3ad53abb8ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c5-48d3-a4f8-fbd91a97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0da1-471f-bd96-15571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb8ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91a97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-15571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3a1-47bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbeac1b1-46c2-aed5-3ad53abb8ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c5-48d3-a4f8-fbd91a97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0da1-471f-bd96-15571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb8ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91a97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-15571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3a1-47bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbeac1b1-46c2-aed5-3ad53abb8ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c5-48d3-a4f8-fbd91a97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0da1-471f-bd96-15571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb8ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91a97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-15571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3a1-47bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbeac1b1-46c2-aed5-3ad53abb8ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c5-48d3-a4f8-fbd91a97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0da1-471f-bd96-15571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb8ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91a97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-15571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3a1-47bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbeac1b1-46c2-aed5-3ad53abb8ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c5-48d3-a4f8-fbd91a97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0da1-471f-bd96-15571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb8ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91a97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-15571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3a1-47bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbeac1b1-46c2-aed5-3ad53abb8ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c5-48d3-a4f8-fbd91a97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0da1-471f-bd96-15571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb8ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91a97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-15571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3a1-47bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbeac1b1-46c2-aed5-3ad53abb8ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c5-48d3-a4f8-fbd91a97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0da1-471f-bd96-15571e29d72',
            title: 'Third Item',
        },
    ];
    return (
        <View>
            <Text>FlatListTut</Text>
            <FlatList 
                data={DATA}
                keyExtractor={(i, idx) => i.id + "-_-_-" + idx}
                renderItem={({item}) => <Item title={item.title} />}
                numColumns={2}
            />
        </View>
    )
}

export default FlatListTut

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
