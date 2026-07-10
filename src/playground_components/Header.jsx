
const Header = (props) => {
    console.log(props)
    return (
        <div>
            appname: {props.xyz}
            count: {props.abc}
        </div>

    )
}

export default Header