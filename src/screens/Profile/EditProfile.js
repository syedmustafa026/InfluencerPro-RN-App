import React, { useState, useEffect } from "react"
import { SafeAreaView, StyleSheet, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { TextInput, Button, Switch } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import moment from "moment/moment"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { launchImageLibrary } from 'react-native-image-picker'

import * as colors from "../../utilities/colors"
import * as functions from '../../utilities/functions'
import * as fonts from "../../utilities/fonts"
import Dropdown from "../../components/Dropdown"
import Toast from "../../components/Toast"

const EditProfile = ({ navigation, route }) => {

  const influencer = route.params
  const [dialects, setDialects] = useState(influencer?.personal_information?.dialects || '')
  const [hairtype, setHairtype] = useState(influencer?.personal_information?.hair_type || '')
  const [haircolor, setHaircolor] = useState(influencer?.personal_information?.hair_color || '')
  const [age, setAge] = useState(influencer?.personal_information?.age || '')
  const [language, setLanguage] = useState(influencer?.personal_information?.spoken_language?.name || '')
  const [tattoes, setTattoes] = useState(influencer?.personal_information?.tattoes || '')
  const [valid_license, set_valid_license] = useState(influencer?.personal_information?.valid_license || '')
  const [skills, setSkills] = useState([])
  const [gender, setGender] = useState(influencer?.personal_information?.gender || 'Male')
  const [categories, setCategories] = useState('Select your Category')
  const [categoryId, setCategoryId] = useState(influencer?.user_professional_detail?.category_id || null)
  const [features, setFeatures] = useState(influencer?.user_professional_detail?.professional_category || [])
  const [genderModal, setGenderModal] = useState(false)
  const [img, setImg] = useState(null)
  const [image, setImage] = useState(null)

  const OpenGallery = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      saveToPhotos: true,
    }
    launchImageLibrary(options, response => {
      if (response.didCancel) {
      }
      else {
        setImg(response.assets[0])
        setImage(response.assets[0])
      }
    })
  }

  
  const handlePress = async () => {
    try {
      const payload = {
        dialects: dialects,
        hair_type: hairtype,
        hair_color: haircolor,
        age: age,
        valid_license: valid_license,
        tattoes: tattoes,
        gender: gender,
        professional_category: features,
        category_id: categoryId,
        skills: [skills],
        features: [1, 2],
        ethnicty_id: 1,
        spoken_language_id: 1,
        logo: image
      }
      console.log(payload);
      const response = await functions.completeProfile(payload)
      if (!response.status) throw new Error(response.message)
      if (response.status) {
        Toast(response.message)
        navigation.replace("BottomNavigator")
      }
    }
    catch (error) {
      Toast(error.message || `${route.name} Server Error`)
    }
  }
console.log("sss",image);
  useEffect(() => {
    if (route.params.type === 'category') {
      setCategories(route?.params?.title)
      setCategoryId(route?.params?.id)
    }
  }, [route.params])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.head}>
          <View style={styles.imgCon}>
            <TouchableOpacity
              onPress={() => OpenGallery()}
              activeOpacity={0.8}>
              <Image style={styles.image} source={{ uri: image == null ? influencer?.image_url : image.uri }} />
              <Icon style={{ position: 'absolute', bottom: 0, left: 70 }} name='pencil-circle' color={colors.gray} size={28} />
            </TouchableOpacity>
          </View>
        </View>
        <Dropdown
          data={['Male', 'Female', 'Binary']}
          style={styles.dropdown}
          value={gender}
          toggleModal={() => setGenderModal(!genderModal)}
          modal={genderModal}
          setModal={setGenderModal}
          setValue={setGender} />
        <TouchableOpacity
          onPress={() => navigation.navigate("Categories", "editProfile")}
          activeOpacity={0.6}
          style={styles.selectButton}>
          <Text style={styles.selectLabel}>{categories}</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => setGenderModal(false)} style={styles.center}>
          <View style={styles.InputBoxes}>
            <View
              style={styles.InputBox}>
              <TextInput
                theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
                style={styles.Input}
                placeholder="Proffesional Category"
                activeUnderlineColor={colors.primary}
                value={features}
                maxLength={11}
                onChangeText={(value) => setFeatures(value)}
              />
            </View>
            <View style={styles.InputBox}>
              <TextInput style={styles.Input}
                theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
                placeholder="Dialects"
                value={dialects}
                activeUnderlineColor={colors.primary}
                onChangeText={(value) => setDialects(value)}
              />
            </View>
            <View style={styles.InputBox}>
              <TextInput style={styles.Input}
                theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
                placeholder="Hair Type"
                value={hairtype}
                activeUnderlineColor={colors.primary}
                onChangeText={(value) => setHairtype(value)}
              />
            </View>
            <View style={styles.InputBox}>
              <TextInput style={styles.Input}
                theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
                placeholder="Hair Color"
                value={haircolor}
                activeUnderlineColor={colors.primary}
                onChangeText={(value) => setHaircolor(value)}
              />
            </View>
            <View style={styles.InputBox}>
              <TextInput
                theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
                style={styles.Input}
                placeholder="Age"
                value={age}
                keyboardType='number-pad'
                activeUnderlineColor={colors.primary}
                onChangeText={(value) => setAge(value)}
              />
            </View>
            <View style={styles.InputBox}>
              <TextInput
                theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
                style={styles.Input}
                placeholder="Valid License"
                value={valid_license}
                activeUnderlineColor={colors.primary}
                onChangeText={(value) => set_valid_license(value)}
              />
            </View>
            <View style={styles.InputBox}>
              <TextInput
                theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
                style={styles.Input}
                placeholder="Spoken language"
                value={language}
                activeUnderlineColor={colors.primary}
                onChangeText={(value) => setLanguage(value)}
              />
            </View>
            <View style={styles.InputBox}>
              <TextInput
                theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
                style={styles.Input}
                placeholder="Tattoes"
                value={tattoes}
                activeUnderlineColor={colors.primary}
                onChangeText={(value) => setTattoes(value)}
              />
            </View>
            <View
              style={styles.InputBox}>
              <TextInput
                theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
                style={styles.Input}
                placeholder="Set Skills (seperate it by coma)"
                activeUnderlineColor={colors.primary}
                value={skills}
                onChangeText={(value) => setSkills(value)}
              />
            </View>

          </View>
        </TouchableOpacity>
        <View style={styles.btn}>
          <Button
            mode="contained"
            onPress={handlePress}
            style={styles.footerButton}
            contentStyle={styles.footerButtonContent}
            labelStyle={styles.ButtonLabel}
          >SAVE CHANGES</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: wp("3"),
    flex: 1,
    backgroundColor: colors.white
  },
  head: {
    justifyContent: 'flex-end',
    flex: 0.2,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 4,
    marginHorizontal: 6,
  },
  imgCon: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
    marginRight: 12,
    borderRadius: 100,
    resizeMode: 'contain'
  },
  h1: {
    fontSize: hp("4.2"),
    color: colors.primary,
    marginHorizontal: wp("4"),
    marginVertical: hp("2"),
    fontFamily: fonts.BOLD
  },
  h4: {
    fontSize: hp("2"),
    marginHorizontal: wp("5"),
    fontFamily: fonts.SEMIBOLD,
    color: colors.primaryLight
  },
  h2: {
    fontSize: hp("2.1"),
    fontFamily: fonts.SEMIBOLD,
    color: colors.secondary
  },
  ImageBox: {
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 100
  },
  InputBoxes: {
    flex: 0.9,
  },
  icon: {
    position: 'absolute',
    right: 20
  },
  eye: {
    position: 'absolute',
    right: 30,
    zIndex: 2,
    alignItems: 'center'
  },
  InputBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp("2"),
  },
  Input: {
    backgroundColor: colors.white,
    marginHorizontal: wp("3.5"),
    width: '90%',
  },

  dropdown: {
    width: '95%',
    marginVertical: 8,
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderBlockColor: colors.gray,
    color: colors.gray,
    fontFamily: fonts.SEMIBOLD
  },
  btn: {
    justifyContent: "center",
    alignItems: "center"
  },
  footerButton: {
    width: '90%',
    marginVertical: 16,
    backgroundColor: colors.primary
  },
  footerButtonContent: {
    paddingVertical: 8,
  },
  ButtonLabel: {
    fontSize: hp("2.2"),
    color: colors.white,
    fontFamily: fonts.SEMIBOLD
  },
  selectButton: {
    alignSelf: 'center',
    width: '95%',
    borderRadius: 4,
    height: 45,
    paddingHorizontal: 4,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 1,
    marginTop: 8,
  },
  selectLabel: {
    fontSize: hp("2.2"),
    color: colors.gray,
    textAlign: 'justify',
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
})

export default EditProfile