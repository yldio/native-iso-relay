import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFF',
  },
  mainArticleContainer: {
    padding: 10,
    alignItems: 'stretch',
  },
  loadMoreDiv: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  loadMore: {
    backgroundColor: '#82438B',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 25,
    paddingLeft: 25,
  },
  whiteColor: {
    color: '#FFF',
  },
  articleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E7E7E7',
    paddingTop: 5,
    paddingBottom: 5,
  },
  rightContainer: {
    flex: 1,
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 5,
  },
  title: {
    fontFamily: 'verdana',
    fontWeight: '500',
    textAlign: 'left',
    marginBottom: 4,
  },
  rubric: {
    fontFamily: 'verdana',
  },
  teaser: {
    fontFamily: 'georgia',
    marginTop: 5,
  },
  mainImage: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: 350,
    height: 200,
  },
  thumbnail: {
    width: 115,
    height: 95,
    alignSelf: 'flex-start',
    marginLeft: 5,
  },
  logo: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    width: 65,
    height: 45,
  },
  toolbarAd: {
    backgroundColor: '#2F3849',
    height: 66,
  },
  toolbarIos: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderColor: '#00BAD9',
    borderBottomWidth: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 71,
    alignItems: 'center',
  },
  loadMoreDiv: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
