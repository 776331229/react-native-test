/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    TabBarIOS
} from 'react-native';

import Icons from 'react-native-vector-icons/Ionicons'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedTab: 'homeTab',
            homeTabBase64 : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAQlBMVEUAAABWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmqVruLgAAAAFXRSTlMAfxA/wF+gIDDw35DgT+/Qr3BvsM/6MK11AAACq0lEQVR42u3a3W7bMAyGYf1atmw1jhPd/60O3TAo3tLGCtVMxd7nvAiojxSFJgoAAAAAAAAAAAAAAAAAAAAAAAAAAPxvRj87F6ObtR3Vd2W1yztXp72wnNFu+p23LzqY4Ne3fJ/bRvUU49e859ygvTXqq4z6mj8VN1Nfhr5zMiXqzYbWVcwxPxZtZcJDfsyt2tsXVVGMbcso3tysZfEEHfNxUVLGsXjS+EwV2zXXSQdnY8gC8X16TNV9Uk0LR7yq24Yj3WaHpz5MqyO8y81cV51s3WDICynCPOWWopv/6jYjOa9Q0bmn3NhyVsU4SPp3VjXGoWUsg705pS1miVP9A2VpFYa5ne8s44yqZ4cWYQjmW9pXhTkvojD8zfmlNUtNST3PXjoJI+fBKJGgF+lkrFnOWSWXLrJrSm7xqpJ8TS467C6MnsqoeL24dHuFx/7KeBcerclpDo0WeOFqy5C/Xk6+Ir/aaWtvHD74yPH2ohOGUQKuIFuT7W/bErBRVeRr8rIf8N57ai/o6U7+QTrgJeDXCac/80/dD/h9YdptcB2/zWT8yezvMrmpXH0ywW5aJ/vE0u9p9d30Rhy8qfo7ufJC25P/03o9Vss4dDXfpYxba1IPJNfXfG8f3f5vc/ik+i129gyZ8yeuu/NqvPsuSTV1nnJxKBbr+tzf46nmZjQ+9rMyar9NiDo0fKNfvPoyfsoPrLbNdbucgxKQtFeJxfXaUlXtlbtuqYr2EjqJbyl5e8kt4sUnX45y05DUy6Xm7XURvKUkQtP2clVV9Npe9Vl02F7T4I3656TtddLd/O5NP1/EnDqIorBTrjY5bbsq4ifj6mqYfVCd0vmIxc3nDnM43F6Lc7P23+XHrObiftG/JftOAQAAAAAAAAAAAAAAAAAAAAAAAAAAdO8H0+mWGVq9BmcAAAAASUVORK5CYII=',
            trafficTabBase64 : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAgVBMVEUAAABWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmr3hHBHAAAAKnRSTlMAc8IW1kJX8PiNJ6mL6gOA9NFwaE0MtJiF/MoRBqE85d+7Lxt6Nq2RXCINYzyvAAAEJklEQVR42u3d6XKiQBSG4eOCzWCURRZRBBG3nPu/wMnMZMxIK4FAd2Dqe/6mIvUqdLcW1RAAAAAAAACAcsm2MHxvbdu256eTgAaq8CNXmGbMb2LTyULvMMQWy16wJPRpaFYLfmj3SkNSzPmZqUXDEeT83P5AgxFxlc2EBmLG1dY0DNsNV3MGcpn4fE/sF4LvvNAQLHf3U8fIsE6+nd9d7wkNwETwh41P764u3zgGDYDBH3YTuinGfGPTAKz5Jlw+GQRy6r/l/GMSf6U7p9uyxaX+S3L+60glL7fELfVesLmNTRaVWOLvnwawdNw6/O5MZYnLf4ghLOcFv4ueTzGiDwvHwB9V8I5mxfxt8x9m5FW+iEHKbdeuw9UqP5F6hHtMSCnD5dpCKkvGXNvmQAoZGdcnD02FaPLvKSljZdyERyVezA24W1LlzI3sJ3Qn2HMjl4TUSB1uQFprUcTNmBapEXFT84A+HLmpFanRYMyRv48cQm5sl9BvPQhhka8Ok+B0nS+4uTCgX3oRwhw7Qjgxf4X7Z7ToSUgLU4Qg5DeEIAQh1RDyrSGb0ewTIUt2s2r+Mdcdsv78GPZXlrPBSG+ITZ/7wZIRfW6lMyQndSEU6QsxU5UhRqwtZJ+oDNlutIXslipDaKctZE1KQ+baQl4QghCEIAQhCEEIQhBCCEEIQhCCEIQg5A1CEIIQhCAEIQh5gxCEIAQhCEEIQt4gBCEIQQhCENLHkDXV8dL/kB/Lzz38RFY9u4MuG9eRsSQy6hj3/5ZyR9Rh9j+kj/fGP4AQhCCkGkK+M8R8JOZmYvMRnSHZ0U+NstS4npukmNE1NSTpLNQXYhpdbKZg02PLs7aQzZKeuJpclyjoCcPUFRI9DUlFB5tsFNPv/z5iiA6GpGCjK+SiNuR1ryskp2dWMdflFPTESegKcU70RNjFZiEjffOIe7IeOXgm17eYWQ/NFjpn9mwhyxxuZvFAJrDWQkgZQhCCkGoIQQhCqiEEIQiphhCEDCXkv9mnsV87Z970Zy/TiNvpze6yqcPt9GW/Xwq5pZ7swExWxi31ZE9sMjSWTNXutz7lVvqyb/w/O/mbrIQp7eSvzNL//QgFwZLpyBs14dkOl4mRJz1bQakVSxZWB68Sz0irVD6zhEHN7eRzyyCNJpuOpuFgrHPUlV1YMqIveZWHwYi08c3ujm4IXUss2UR+F/NJh8PG4kB6nLlsX3R6no6XpMMs5hLnRG3kXHYhDSwhdfjUytblMp+UC0Iu86glw+GS7JVUk6/NF2rN47IwIbVODpecA2pvrfvBokmu6Ceb84MVj0pH6XgdncyFNDcpfUKfYZY7UnXn7JyUCVy+F1+pM1eNS5WL0ityzSVmShI171m0pC7tYk0Pd55d7DvHjo9TjNb2nXUfHpsIAAAAAAAA8E1+ApN4TzxQNAr5AAAAAElFTkSuQmCC',
            businessTabBase64 : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAe1BMVEUAAABWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpWXmpXgOLbAAAAKHRSTlMA1b0W9LQqZ/oF7i8cDZn4o20kUTXnkEQQ4cOEcsurYTzbCdBLeViJubCOqQAABJpJREFUeNrs2t1yokAQhuGGQeVPRETwB0WCuN/9X+GebFbtbCWpod2hUv0cW46vwjQlkFJKKaWUUkoppZRSSinFROaW98Eo21O2MRG5ZZoAErq1IZcuPaQc5uROHUPO/kKulDEkeQW5sfMh6xyRE2tIu5ILUQdpB3IhgbjAkANNCGlhSw7kEBcO5ICPD4Ku976ti8GFFTkwYx8iH9prOf++pL41eYgnM7IgG3K4ko2rP7GQLiU7pptUSLggW82kQvqUbM27KYXkZO3Nn1JIRvayKYUMZK+aUsjip/wiY0KGnxKy0BAN0RAN+ScN0RAN+ZyGaIiGfE5DNERDLAiFtGSv/b8hy9QwPu6ayNiKGtz5hkl3JCs9e1yAu23v2eq3uAs8LjMkKglgYYL3rGs4sk1I1BWu1CSqgZXp3Xs/wpWGJJkZXDnKhvhwZWZIUBLDFV80pFzBlTj5EWMECEsSdMNHQed53hZStp7n7cNXD5IjuHi2LoxJr5UHCf2vizEmGQ4rcDeSs8zAeH/fvsgxWlwZ+mO9B3N85e57KiSHZdzS3YWX5EsSU3hs5Tk9qkSH93XF99/XXcSv2ZHXYwx/yU7I113Il3iyN6KPaW747x/jUZCQmA2eVJHkA8CnlG8tOZ6UJGbNv0ImPcBeRtzAl5PyluHJhZgoFw1p+RkpZXf+ImR5Fg1ZsBe8kZD09MWsLU6wl0fEDC+6kOfbCH7xpS8B7HVzfgDM8MRLSUgSsnnI33nAGC1fbsWWK0jIBcwQ0aNiD8jtv1GFZ2FCQlowQU0PdjnG4HOpDV71R0p0BLd9KFlmIcZZPZ50txjcguzxScvFR/N+3B1CjBXO3qe3qQJ8cIxe+BdKuM82dVkv/AAS4vOiLutNtg/xUb4jEenvdu5wR1EgCAJwK3g7IyAi6CqC7uLebb3/E17MxfPP/tnpSaZ0+3sAk0qkaWoC7/iSq+vaIcB3f23MJIpfSOxQ0r66802bWBVKap3E4Aekdo5VoaQ2+EhLfGrrKtL0TW2xjxJkidTeS4lgg+SW5YM38f8VnO8WK6ovhekT6TVxlvj0jp7w9ftU8zfbIr0xRhAQ2GYxKhQGEYK0YPARo0Jh8EcfZAcG+vlbMUzfGI38fgYGfSVKmQOD2f4Jlvgrlz3H9AW6Z1jiYyzynmGJj7HITwxL/O0MRaMawWExKYPk4DBWolLW4JBPovLGEsRtROXMcWMH3IeoHGmCnEXDp2/ibz51QXqwWHtVkANYzP1T3EaAg3/IV6tif/qwJQrSiULDMn2BvBWFHU8Q14hC+nPQu5UocFQo/5xEgaGJv5lJuE36A927rWaJZwqy7CSUb1ieRq7yt/Agv5mC1IOXQBPT9IU7hgfhaOJvTtNDn4Pe9cFBCq4g4SeiLdP0BbadBGp4lvirZSuBdkzTF8gbCbQAlXongVgKbPV3bLguEaD/8UEu4LKQQGueJ3bdxf7C9d/KXyVQyVOYKg+tXsCklXA8ZbyyRSl4/lyXTDQ6liRjIToFx+PuqRSt/fnikJabv1YSwb4YVv08lX41FJUYY4wxxhhjjDHGGGOM+Yn+AqHUztM1+TzEAAAAAElFTkSuQmCC',
            myTabBase64 : 'data:image/png;base64,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',
        }
    }

    _renderContent(color: string, pageText: string, num?: number) {
        return (
            <View style={[styles.tabContent, {backgroundColor: color}]}>
                <Text style={styles.tabText}>{pageText}</Text>
                <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
            </View>
        );
    }

    render() {
        return (
            <TabBarIOS
                unselectedTintColor="#565e6a"
                tintColor="#57b1f8"
                barTintColor="white">
                <Icons.TabBarItem
                    title="首页"
                    iconName="ios-home-outline"
                    selectedIconName="ios-home"
                    selected={this.state.selectedTab === 'homeTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'homeTab',
                        });
                    }}>
                    {this._renderContent('#414A8C', '首页')}
                </Icons.TabBarItem>
                <Icons.TabBarItem
                    title="录制"
                    iconName="ios-videocam-outline"
                    selectedIconName="ios-videocam"
                    selected={this.state.selectedTab === 'videoCameraTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'videoCameraTab',
                        });
                    }}>
                    {this._renderContent('#414A8C', '录制')}
                </Icons.TabBarItem>
                <Icons.TabBarItem
                    title="我的"
                    iconName="ios-person-outline"
                    selectedIconName="ios-person"
                    selected={this.state.selectedTab === 'myTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'myTab',
                        });
                    }}>
                    {this._renderContent('#414A8C', '我的')}
                </Icons.TabBarItem>
            </TabBarIOS>
        );
    }
}

const styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});

AppRegistry.registerComponent('Home', () => Home);
