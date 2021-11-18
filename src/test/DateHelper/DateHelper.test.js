import DateHelper from '../../DateHelper/DateHelper'

describe('DateHelper', () => {
  describe('trimDate method', () => {
    it('should format a date string in the proper format', () => {
      expect(DateHelper.trimDate('Tue Nov 09 2021')).toBe('Nov 09, 2021')
    })
  })
})
