import databases from 'shared/parsing/showDatabases'
import measurements from 'shared/parsing/showMeasurements'
import fieldKeys from 'shared/parsing/showFieldKeys'
import tagKeys from 'shared/parsing/showTagKeys'
import tagValues from 'shared/parsing/showTagValues'

const parsers = {
  databases,
  measurements: data => {
    const {errors, measurementSets} = measurements(data)
    return {errors, measurements: measurementSets[0].measurements}
  },
  fieldKeys: (data, key) => {
    const {errors, fieldSets} = fieldKeys(data)
    return {errors, fieldKeys: fieldSets[key]}
  },
  tagKeys,
  tagValues: (data, key) => {
    const {errors, tags} = tagValues(data)
    return {errors, tagValues: tags[key]}
  },
}

export default parsers
