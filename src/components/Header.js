import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
  const onCLick = () => {
    console.log
  }


  return (
    <header className='header'>
    <h1>{title}</h1>
    <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}



// css in  js

// const HeadingStyle = {
//   color: 'red',
//   backgroundColor: 'Black'
// }



export default Header
