import '../styles/filters.css'
export default function Filters({selectedFilter, handleSelectedFilter}){
    return<>
        <div className="container-filters">
            <h3>Filtros:</h3>
            <div>
                <input type="radio" id="filtersChoice1" name="filters" value="sales"
                checked={selectedFilter === 'sales'} 
                onChange={(event)=>{handleSelectedFilter(event)}}
                />
                <label htmlFor="sales">Mais vendidos</label>

                <input type="radio" id="filtersChoice2" name="filters" value="higherPrice" 
                checked={selectedFilter === 'higherPrice'} 
                onChange={(event)=>{handleSelectedFilter(event)}}
                />
                <label htmlFor="contactChoice2">Maior preço</label>

                <input type="radio" id="filtersChoice3" name="filters" value="lowestPrice" 
                checked={selectedFilter === 'lowestPrice'} 
                onChange={(event)=>{handleSelectedFilter(event)}}
                />
                <label htmlFor="contactChoice3">Menor preço</label>
            </div>
        </div>
    </>
}