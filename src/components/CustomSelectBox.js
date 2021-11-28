import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

function SearchIcon({ color }) {
  return (
    <svg
      style={{ margin: '-11px 0 0 0' }}
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.1866 11.2216H12.9766L17.2166 
        15.4816C17.6266 15.8916 17.6266 16.5616 17.2166 
        16.9716C16.8066 17.3816 16.1366 17.3816 15.7266 
        16.9716L11.4766 12.7216V11.9316L11.2066 
        11.6516C9.80656 12.8516 7.89656 13.4716 
        5.86656 13.1316C3.08656 12.6616 0.866562 
        10.3416 0.526562 7.54157C0.0065625 3.31157 
        3.56656 -0.248427 7.79656 0.271573C10.5966 
        0.611573 12.9166 2.83157 13.3866 5.61157C13.7266 
        7.64157 13.1066 9.55157 11.9066 10.9516L12.1866 
        11.2216ZM2.47656 6.72157C2.47656 9.21157 4.48656 
        11.2216 6.97656 11.2216C9.46656 11.2216 11.4766 9.21157 
        11.4766 6.72157C11.4766 4.23157 9.46656 2.22157 6.97656 2.22157C4.48656 2.22157 2.47656
        4.23157 2.47656 6.72157Z'
        fill={color}
      />
    </svg>
  )
}

function CancelIcon() {
  return (
    <svg
      style={{ margin: '-9px 0px 0px -4px' }}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 10C0 4.47 4.47 0 10 0C15.53 0 20 4.47 20 10C20 15.53 15.53 20 10 20C4.47 20 0 15.53 0 10ZM12.89 
            14.3C13.28 14.69 13.91 14.69 14.3 14.3C14.68 13.91 14.68 13.27 14.3 12.89L11.41 10L14.3 7.11C14.69
            6.72 14.69 6.09 14.3 5.7C13.91 5.31 13.28 5.31 12.89 5.7L10 8.59L7.11 5.7C6.72 5.31 6.09 5.31 5.7 5.7C5.51275 
            5.88683 5.40751 6.14048 5.40751 6.405C5.40751 6.66952 5.51275 6.92317 5.7 7.11L8.59 10L5.7 12.89C5.51275 
            13.0768 5.40751 13.3305 5.40751 13.595C5.40751 13.8595 5.51275 14.1132 5.7 14.3C6.09 14.69 6.72 14.69 
            7.11 14.3L10 11.41L12.89 14.3Z'
        fill='#505F79'
      />
    </svg>
  )
}

function CustomSelectBox({
  onChange,
  onClear = () => null,
  value = '',
  placeholder = 'Search',
}) {
  const inputRef = useRef(null)
  const [position, setPosition] = useState('left')
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    setInputValue(value)
  }, [value])

  function handleFocus() {
    if (document.activeElement === inputRef.current) {
      setPosition('right')
    }
  }

  function handleBlur() {
    if (document.activeElement !== inputRef.current) {
      if (inputValue === '') {
        setPosition('left')
      }
    }
  }

  function handleChange(e) {
    setInputValue(e)
    onChange(e)
  }

  function clearInput() {
    setInputValue('')
    onClear()
    setPosition('left')
    inputRef.current.focus()
  }

  return (
    <Wrapper>
      {position === 'left' && (
        <IconWrapper position='left'>
          <SearchIcon color='#A5ADBA' />
        </IconWrapper>
      )}
      <CustomSelect
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={inputValue}
        type='input'
        placeholder={placeholder}
        position={position}
      />

      {position === 'right' && inputValue === '' && (
        <IconWrapper position='right'>
          <SearchIcon color='#505F79' />
        </IconWrapper>
      )}

      {position === 'right' && inputValue !== '' && (
        <IconWrapper onClick={clearInput} position='right'>
          <CancelIcon />
        </IconWrapper>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`

const IconWrapper = styled.span`
  padding: 15px;
  text-align: center;
  position: absolute;
  cursor: pointer;

  ${(props) =>
    props.position === 'left'
      ? css`
          top: 0;
          bottom: 0;
        `
      : css`
          right: 0;
          top: 0;
          bottom: 0;
        `}
`

const CustomSelect = styled.input`
  width: 100%;
  background: #ffffff;
  border: 1.5px solid #dfe1e6;

  box-sizing: border-box;
  border-radius: 4px;
  color: #a5adba;
  font-size: 14px;
  line-height: 18px;
  color: #505f79;
  outline: 0;

  &:focus,
  :active {
    border: 1.5px solid #1b69fb;
  }
  &:hover:not(:focus) {
    border: 1.5px solid #a5adba;
  }

  ${(props) =>
    props.position === 'left'
      ? css`
          padding: 10px 10px 10px 40px;
        `
      : css`
          padding: 10px 40px 10px 10px;
        `}
`

export default CustomSelectBox

CustomSelectBox.proTypes = {
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}
