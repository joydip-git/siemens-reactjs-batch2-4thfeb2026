const ProductList = () => {
    const names = ['anil', 'sunil']
    return (
        <div>
            <ul>
                {
                    names
                        .map(
                            (name) => {
                                return <li>{name}</li>
                            }
                        )
                }
            </ul>
        </div>
    )
}

export default ProductList