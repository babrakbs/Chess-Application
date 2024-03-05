import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors, radius, fontFamily, fontSize } from '../../../Constant';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  mainImage: {
    marginTop: hp(5),
    marginBottom: hp(5),
    alignSelf: 'center',
    height:hp(40),
    width:wp(80),
  },
  mainText: {
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent:'center',
    color: colors.black,
    fontWeight: '700',
    fontSize: fontSize.fourpointfive,
    width:wp(70),
  },

  descpText: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: hp(4),
    color: colors.gray,
    fontWeight: '400',
    fontSize: fontSize.ThreePointSeven,
    width:wp(85),
  },

  slideContainer: {
    flex: 1,
    width:wp(90),
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor:colors.white,
    borderRadius:radius.six,
    marginBottom:hp(5),
    marginTop:hp(3),
    elevation:20,
    marginBottom:hp(3),
  },
 
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center the dots horizontally
    marginTop: wp(5), // Adjust the margin as needed
  },
  dot: {
    backgroundColor: colors.gray,
    width: wp(2), // Adjust the size of the dots as needed
    height: wp(2), // Adjust the size of the dots as needed
    borderRadius: radius.three,
    marginTop:hp(2),
    marginHorizontal: wp(1), // Adjust the spacing between dots as needed
  },
  activeDot: {
    backgroundColor: colors.primaryColor,
    width: wp(4), // Adjust the size of the active dot as needed
    height: wp(2), // Adjust the size of the active dot as needed
    borderRadius: radius.three,
    marginHorizontal: wp(1), // Adjust the spacing between dots as needed
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // alignSelf:'center',
    marginTop: hp(4),
    width:wp(90),
  },
  btnSkipText: {
    color: colors.gray,
    textAlign: 'center',
    fontSize: fontSize.fourpointfive,
    marginLeft: wp(5),
  },

  btnNext:{
    borderRadius:radius.four,
    backgroundColor:colors.primaryColor,
    justifyContent:'center',
    width:wp(35),
    height:hp(8),
    
    marginRight:wp(5),
  },
  btnNextText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: fontSize.fourpointfive,
    fontWeight:'400',
  },

});
