import React from 'react';
import { findNodeHandle } from 'react-native';
import NavigationContext from './NavigationContext';

export default class SceneView extends React.PureComponent {
  componentDidMount() {
    this.props.navigation.setParams({ nodeTag: findNodeHandle(this) });
  }

  render() {
    const { screenProps, component: Component, navigation } = this.props;
    return (
      <NavigationContext.Provider value={navigation}>
        <Component screenProps={screenProps} navigation={navigation} />
      </NavigationContext.Provider>
    );
  }
}
