function Button(props: any) {
    return (
        <>
        <div>
            <button className="btn btn-primary" onClick={props.onClick}>{props.caption}</button>
          </div>
        </>
    )
}

export default Button