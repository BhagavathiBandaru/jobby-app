import ProfileDetails from '../ProfileDetails'

import './index.css'

const JobFilterGroup = props => {
  const getEmploymentTypeListData = () => {
    const {employmentTypesList} = props

    return employmentTypesList.map(employ => {
      const {changeEmploymentType} = props
      const onChangeEmployType = event =>
        changeEmploymentType(event.target.value)
      return (
        <li
          className="checkbox-list-items"
          key={employ.employmentTypeId}
          onChange={onChangeEmployType}
        >
          <input
            type="checkbox"
            className="check-radio"
            id={employ.employmentTypeId}
            value={employ.employ}
          />
          <label htmlFor={employ.employmentTypeId} className="check-label">
            {employ.label}
          </label>
        </li>
      )
    })
  }

  const getEmploymentSalaryRangeData = () => {
    const {salaryRangesList} = props

    return salaryRangesList.map(salary => {
      const {changeSalaryRange} = props
      const onChangeSalary = () => changeSalaryRange(salary.salaryRangeId)

      return (
        <li
          className="checkbox-list-items"
          key={salary.salaryRangeId}
          onChange={onChangeSalary}
        >
          <input
            type="radio"
            className="check-radio"
            id={salary.salaryRangeId}
            value={salary}
          />
          <label htmlFor={salary.salaryRangeId} className="check-label">
            {salary.label}
          </label>
        </li>
      )
    })
  }

  const renderEmploymentTypeBlock = () => (
    <div className="type-salary-container">
      <h1 className="employer-type-heading">Type of Employment</h1>
      <ul className="employee-type-list">{getEmploymentTypeListData()}</ul>
    </div>
  )

  const renderSalaryRangeBlock = () => (
    <div className="type-salary-container">
      <h1 className="employer-type-heading">Type of Employment</h1>
      <ul className="employee-type-list">{getEmploymentSalaryRangeData()}</ul>
    </div>
  )

  return (
    <div className="job-filter-group">
      <ProfileDetails />
      <hr className="hr-line" />
      {renderEmploymentTypeBlock()}
      <hr className="hr-line" />
      {renderSalaryRangeBlock()}
    </div>
  )
}

export default JobFilterGroup
