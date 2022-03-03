
import PropTypes from 'prop-types'

function Button({children,version, type, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version} `}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'submit',
    type: 'button',
    isDisabled: true
}

Button.propsTypes={
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button