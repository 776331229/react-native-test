/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Icons from 'react-native-vector-icons/Ionicons'
import Mock from 'mockjs'
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    ListView,
    Dimensions,
    Image,
    TouchableHighlight,
    RefreshControl
} from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            isRefreshing:false, // 是否正在刷新
            dataSource:ds.cloneWithRows([]),
            pageInfo:{
                page:1, // 当前第几页
                pageNum:10, // 一页加载几条数据
                total:0 // 一共有几页
            }
        }
    }

    /**
     * render 列表一项
     * */
    _renderRow(row){
        return (
            <TouchableHighlight>
                <View style={styles.rowItem}>
                    <Text style={styles.rowTitle}>{row.title}</Text>
                    <Image
                        style={styles.rowItemImage}
                        source={{uri: row.image}}
                    >
                        <Icons
                            name="ios-play"
                            size={28}
                            style={styles.playIcon}
                        />
                    </Image>
                    <View style={styles.handleBox}>
                        <View style={styles.handleItem}>
                            <Icons
                                name="ios-heart-outline"
                                style={styles.handleIcon}
                            />
                            <Text style={styles.handleText}>喜欢</Text>
                        </View>
                        <View style={styles.handleItem}>
                            <Icons
                                name="ios-chatboxes-outline"
                                style={styles.handleIcon}
                            />
                            <Text style={styles.handleText}>评论</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    /**
     * 组件家在完成
     * */
    componentDidMount(){
        this._fetchDta();
    }

    /**
     * 获取数据
     * */
    _fetchDta(){
        fetch('http://rapapi.org/mockjs/19824/api/videoList?acessToken=asd&page='+this.state.pageInfo.page)
            .then((response) => response.json())
            .then((responseJson) => {
                let res = Mock.mock(responseJson);
                if(res.success){
                    this.setState({
                        isRefreshing:false,
                        dataSource:this.state.dataSource.cloneWithRows(res.data),
                        pageInfo:{
                            total: res.total / this.state.pageInfo.pageNum
                        }
                    })
                }

            }).catch((error) => {
            console.error(error);
        });
    }

    /**
     * 下拉刷新,下面调用时候， 用bind（this）,保持该函数里this的指向。
     * */
    _onRefresh(){
        if(this.state.isRefreshing){
            return;
        }
        this.setState({isRefreshing: true});
        this._fetchDta();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>狗狗说</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            tintColor="#aaa"
                            title="努力加载中..."
                            titleColor="#aaa"
                        />
                    }
                    showsVerticalScrollIndicator={false}
                    enableEmptySections={true}
                    iosautomaticallyAdjustContentInsets={false}
                />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7'
    },
    header: {
        paddingTop: 25,
        paddingBottom: 12,
        backgroundColor: '#ee735c'
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
    rowItem: {
        width: Dimensions.get('window').width,
        marginBottom: 10,
        backgroundColor: '#fff'
    },
    rowTitle: {
        padding: 10,
    },
    rowItemImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 0.56,
    },
    playIcon: {
        position: 'absolute',
        right: 15,
        bottom: 15,
        width: 46,
        height: 46,
        paddingTop: 9,
        paddingLeft: 18,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 23,
        backgroundColor: 'transparent',
        color: '#ee735c',
    },
    handleBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#eee'

    },
    handleItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        width:Dimensions.get('window').width/2 - 0.5,
        padding: 10,
        backgroundColor: '#fff',

    },
    handleIcon: {
        fontSize: 18,
        color: '#333'
    },
    handleText: {
        fontSize: 16,
        paddingLeft: 5,
        color: '#333'
    }
});

AppRegistry.registerComponent('Home', () => Home);
