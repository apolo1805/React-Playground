function Button(props: any) {
    return (
        <>
        <div>
            <button className="btn btn-primary" onClick={props.onClick}>Sign Up</button>
          </div>
        </>
    )
}

export default Button