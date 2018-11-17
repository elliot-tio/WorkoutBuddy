// @flow

import { StyleSheet, View, Image, BackHandler, Modal } from 'react-native';
import React, { Component } from 'react';
import { BACKGROUND_COLOR, logoScreenTimer } from './constants';

import logo from '../../assets/arm-icon-round.png';

let timeoutId;

export default class Logo extends Component<PropTypes> {
    static navigationOptions = {
        header: null,
    }
    render() {
        return (
            <Modal
                visible={this.props.visible}
                onRequestClose={() => {
                    clearTimeout(timeoutId);
                    BackHandler.exitApp();
                }}
                onShow={() => {
                    timeoutId = setTimeout(this.props.onShowFunc, logoScreenTimer);
                }}
            >
                <View style={styles.container}>
                    <Image style={styles.image} source={logo} />
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: BACKGROUND_COLOR,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        flex: 1,
        width: 250,
        height: 250,
        resizeMode: 'contain',
    },

});

type PropTypes = {
    visible: boolean,
    onShowFunc: Function,
};
