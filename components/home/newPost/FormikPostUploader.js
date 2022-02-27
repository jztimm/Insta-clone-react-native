import { View, Text, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import * as Yup from 'yup'
import {Formik} from 'formik'
import { Button, Divider } from 'react-native-elements'

const PLACEHOLDER_IMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDWHK7d1GnyAFK9mQgc6jOEmT8e3cmMfgLA_MZu2OPJK6Q_tNyvG4Z3xh6jZIVzXDAOZ0&usqp=CAU'

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'Caption has reached the charachter limit.')
})

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)


  return (
    <Formik
      initialValues={{caption: '', imageUrl: ''}}
      onSubmit={(values) => console.log(values)}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) =>
        <>
          <View
            style={{
              margin: 20,
              justifyContent: 'space-between',
              flexDirection: 'row'
            }}
          >
            <Image
              source={{uri: thumbnailUrl ? thumbnailUrl: PLACEHOLDER_IMG}}
              style={{width: 100, height: 100}}
            />

            <View style={{flex: 1, marginLeft: 12}}>
              <TextInput
                style={{color: 'white', fontSize: 20}}
                placeholder='Write a caption...'
                placeholderTextColor='gray'
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical"/>
          <TextInput
            style={{color: 'white', fontSize: 18}}
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            placeholder='Enter Image Url'
            placeholderTextColor='gray'
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{color: 'red', fontSize: 10}}>
              {errors.imageUrl}
            </Text>
          )}

          <Button onPress={handleSubmit} title='Share' disabled={!isValid}/>
        </>
      }
    </Formik>
  )
}

export default FormikPostUploader