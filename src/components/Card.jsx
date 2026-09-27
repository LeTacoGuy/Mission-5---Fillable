function Card({filament}) {
    return (
        <div className="filament-card">
                <img
                 src={filament.image}
                    alt={`${filament.brand} ${filament.material_type}`}
                    className="filament-image"
                />
            <div className="filament-info">
                <h3>{filament.color.replaceAll("_", " ")} </h3>
                <p>Brand: {filament.brand.replaceAll("_", " ")}</p>
                <p>Material: {filament.material_type.replaceAll("_", " ")}</p>
                <p>Weight: {filament.weight}g</p>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${(filament.weight / 1000) * 100}%` }}/>
                </div>
            </div>
        </div>
    )
}

export default Card