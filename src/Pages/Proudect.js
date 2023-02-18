import {
  Card,
  List,
  Image,
  Rate,
  Spin,
  Select,
  Typography,
  message,
  Badge,
  Button,
  Input,
} from "antd";
import React, { useEffect,useState,useContext} from "react";
import { addToCart, getAllProducts } from "../API";
// import data from "./data.js";
import SearchBar from "../Components/Search/SearchBar";
import { ShopContext } from "../context/shop-context";
const Proudect = () => {
  const [loading, setLoading] = useState(false);
  // const { title, price, rating, image, discountPercentage, description } = data;
  const [items, setItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("az");
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
  if (searchTerm) setItems(items.filter((item) => item.name === searchTerm));
}, [searchTerm])
  useEffect(() => {
    setLoading(true);

    getAllProducts().then((res) => {
      setItems(res.data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <Spin spinning />;
  }
  const handleSubmit = event=> {
    event.preventDefault();
    console.log(searchTerm);
    const filteredData = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setItems(filteredData);
  };
  const getSortedItems = () => {
    const sortedItems = [...items];
    sortedItems.sort((a, b) => {
      const aLowerCaseTitle = a.name.toLowerCase();
      const bLowerCaseTitle = b.name.toLowerCase();

      if (sortOrder === "az") {
        return aLowerCaseTitle > bLowerCaseTitle
          ? 1
          : aLowerCaseTitle === bLowerCaseTitle
          ? 0
          : -1;
      } else if (sortOrder === "za") {
        return aLowerCaseTitle < bLowerCaseTitle
          ? 1
          : aLowerCaseTitle === bLowerCaseTitle
          ? 0
          : -1;
      } else if (sortOrder === "lowHigh") {
        return a.price > b.price ? 1 : a.price === b.price ? 0 : -1;
      } else if (sortOrder === "highLow") {
        return a.price < b.price ? 1 : a.price === b.price ? 0 : -1;
      }
    });
    return sortedItems;
  };

  return (
    <div className="productsContainer">
    <div className="boxSearch">
      <div>
        <Typography.Text style={{marginLeft:"10px"}}>View Items Sorted By: </Typography.Text>
        <Select
          onChange={(value) => {
            setSortOrder(value);
          }}
          
          defaultValue={"az"}
          options={[
            {
              label: "Alphabetically a-z",
              value: "az",
            },
            {
              label: "Alphabetically z-a",
              value: "za",
            },
            {
              label: "Price Low to High",
              value: "lowHigh",
            },
            {
              label: "Price High to Low",
              value: "highLow",
            },
          ]}
        ></Select>
        </div>
        <div>
        <Input.Search placeholder="Search by Name ..." value={searchTerm}  onClick={handleSubmit} onChange={event => setSearchTerm(event.target.value)}
        style={{marginLeft:"140px",width:"450px",height:"60px"}}/>
      </div>
      </div>
    
      <List
        loading={loading}
        grid={{ column: 3 }}
        renderItem={(product,index) => {
          return (
            <Badge.Ribbon
              className="itemCardBadge"
              text={`${product.discountPercentage}% Off`}
              color="pink"
            >
              <Card
                className="itemCard"
                title={product.name}
                key={index}
                cover={
                  <Image className="itemCardImage" src={product.image} />
                }
                actions={[
                  <Rate allowHalf value={product.rate} />,
                  <AddToCartButton item={product} />,
                ]}
              >
                <Card.Meta
                title={
                    <Typography.Paragraph>
                    price: ${product.price}{" "}
                      <Typography.Text delete type="danger">
                        $
                        {parseFloat(
                          product.price +
                            (product.price * product.discountPercentage) / 100
                        ).toFixed(2)}
                      </Typography.Text>
                    </Typography.Paragraph>
                  }
                  description={
                    <Typography.Paragraph
                      ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                    >
                      {product.description}
                    </Typography.Paragraph>
                  }
                ></Card.Meta>
              </Card>
            </Badge.Ribbon>
          );
        }}
        dataSource={getSortedItems()}
      ></List>
    </div>
  );
};

function AddToCartButton({ item }) {
  const { newProduct, setNewProduct} = useContext(ShopContext);
  const [loading, setLoading] = useState(false);
  const addProductToCart = () => {
    // setLoading(true);
    console.log(newProduct,"tesss")
   // if (newProduct.indexOf(item) !== -1) return;
 
   var a = [...newProduct];
    setNewProduct([...a, item]);
    addToCart(item._id).then((res) => {
      message.success(`${item.name} has been added to cart!`);
      setLoading(false);
    });
    
  };
  return (
    <Button
      type="link"
      onClick={() => {
        addProductToCart();
      }}
      loading={loading}
    >
      Add to Cart
    
    </Button>
  );
}
export default Proudect;


