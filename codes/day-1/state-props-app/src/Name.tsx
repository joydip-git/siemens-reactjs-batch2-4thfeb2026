type NamePropType = {
    nameValue: string,
    handler: (value: string) => void
}
const Name = ({ nameValue, handler }: Readonly<NamePropType>) => {
    return (
        <div>
            <label htmlFor="txtName">Name: &nbsp;</label>
            <input
                type="text"
                id="txtName"
                value={nameValue}
                onInput={
                    (e) => handler((e.target as HTMLInputElement).value)
                } />
        </div>
    )
}

export default Name