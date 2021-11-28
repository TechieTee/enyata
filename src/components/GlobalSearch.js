import React from 'react'
import { useAsyncDebounce } from 'react-table'
import CustomSelectBox from './CustomSelectBox'
// import  searchIcon from '../../assets/icons/search.svg'
// import classes from './Table.module.css'

export default function GlobalSearch({
  searchStyles,
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  placeholder,
}) {
  // var count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  // const { boxWidth, type } = searchStyles
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined)
  }, 200)

  let placeholderText = placeholder ? placeholder : `Find Something...`
  // let styleType = [classes.searchContainer, classes[type]].join(' ')
  // let inlineStyle = { width: boxWidth }

  function handleChange(e) {
    setValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    <div
    // style={boxWidth && inlineStyle}
    //  className={styleType}
    >
      <CustomSelectBox
        value={value || ''}
        onChange={handleChange}
        onClear={() => onChange(null)}
        placeholder={placeholderText}
      />
      {/* <div  className={classes.iconBox}>
          <img src={searchIcon} alt="search" /> 
          </div>  
            
        <input
        className={classes.searchBox}
          value={value || ""}
          onChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={placeholderText }
        /> */}
    </div>
  )
}
