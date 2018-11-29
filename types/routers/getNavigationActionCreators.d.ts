export interface NavigationActionCreator {
    goBack: (key: string) => any;
    navigate: (navigateTo: string, params: any, action: any) => any;
    setParams: (params: any) => any;
}
declare const getNavigationActionCreators: (route: any) => NavigationActionCreator;
export default getNavigationActionCreators;
