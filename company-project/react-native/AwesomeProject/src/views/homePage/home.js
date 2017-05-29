/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Icons from 'react-native-vector-icons/Ionicons'
import config from './../../utils/config'
import http from './../../utils/http'
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    ListView,
    Dimensions,
    Image,
    TouchableHighlight,
    RefreshControl,
    ActivityIndicator
} from 'react-native';

let dataItem = {
    lists:[],
    page:1, // 当前第几页
    pageNum:10, // 一页加载几条数据
    total:0 // 一共有几页
}

export default class Home extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            isRefreshing:false, // 是否正在刷新
            dataSource:ds.cloneWithRows([]),
        }
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
        console.log("当前第"+dataItem.page+"页");
        http.get(config.api.base+config.api.creations , {
            acessToken: 'asd',
            page: dataItem.page
        }).then((res)=>{
            if(res.success){
                this._handleData(res);
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    /**
     * 获取到数据后，对数据进行处理
     * */
    _handleData(res){
        if(dataItem.page === 1 ) dataItem.lists = [];
        ++dataItem.page;
        dataItem.total = res.total;
        console.log(dataItem.lists);
        dataItem.lists = dataItem.lists.concat(res.data);

        setTimeout(()=>{
            this.setState({
                isRefreshing:false,
                dataSource:this.state.dataSource.cloneWithRows(dataItem.lists),
            })
        },1000);
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

    /**
     * 上拉加载数据
     * */
    _onEndReached(){
        if(dataItem.total === this.state.dataSource.length){
            return;
        }
        this._fetchDta();
    }

    _renderFooter(){
        if(dataItem.total === this.state.dataSource.length)
        return (
            <View>
                <Text>没有更多的了</Text>
            </View>
        )

        return (
            <ActivityIndicator

            />
        )
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
                    onEndReached={this._onEndReached.bind(this)}
                    onEndReachedThreshold={50}
                    renderFooter={ this._renderFooter.bind(this) }
                    showsVerticalScrollIndicator={false}
                    enableEmptySections={true}
                    automaticallyAdjustContentInsets={false}
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
