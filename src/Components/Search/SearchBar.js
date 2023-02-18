import React from 'react'

const SearchBar = ({searchTerm,setSearchTerm,items}) => {
     const handleSearch=(e)=>{
if(!e.target.value)return setSearchTerm(items);
const resultArray=items.filter(item=>item.title.includes(e.target.value)||item.bady.includes(e.target.value));
setSearchTerm(resultArray);
     }
     const handleSubmit=(e)=>{
        e.preventDeafult();
     }
  return (
    <>
     <form onSubmit={handleSubmit}>
     <input type="text" style={{width:"500px",height:"30px",border :"1px solid #eee",marginLeft:"200px",borderRadius:"10px"}} onChange={handleSearch} placeholder="Search by name" />
     <button style={{width:"100px",height:"34px",border :"1px solid #e93467",background:"#e93467",color:"white",borderRadius:"4px",marginLeft:"-50px"}}>Search</button>
     </form> 
    </>
  )
}

export default SearchBar
