type NamePropType = {
    nameValue: string,
    nameHandler: (value: string) => void
}
const Name = ({ nameHandler, nameValue }: Readonly<NamePropType>) => {
    return (
        <div>
            <label htmlFor="txtName">Name: &nbsp;</label>
            <input type="text" id="txtName" value={nameValue} onInput={(e) => nameHandler((e.target as HTMLInputElement).value)} />
        </div>
    )
}

export default Name