import React, { useState } from 'react';
import { Alert, View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, FlatList ,Button} from 'react-native';
import Swiper from 'react-native-deck-swiper'



export default class App extends React.Component{

    constructor(props) {

        super(props);
    
        
          this.state={
            cards: [{ id : 0, text : "Object 1"},
            ],
          swipedAllCards: false,
          swipeDirection: '',
          cardIndex: 0,
       
          
    users: [
      {
          id: 0,
          item:"Grilled Sandwitch",
          qty:3,
          price:10

           },
      {
          id: 1,
        item:'Salad',
        qty:4,
        price:20
        },
    

  ],

    
        };
    
    }


   


    onSwiped = (type) => {
      console.log(`on swiped ${type}`)
    }
  
    onSwipedAllCards = () => {
      this.setState({
        swipedAllCards: true
      })
    };
  
    swipeLeft = () => {
      this.swiper.swipeLeft()
    };


addElementView=(cards)=>{

  this.state.cards.push({id:cards.length+1, text:'helloooo'})
 
//   this.state.cards.push({
   
//     id:parseInt(cards[0].id) + 1,
//     text: "object"
// })
}


renderCard = (cards, index) => {

  if(cards.id == 0){

 
  return (
    <View style={styles.card}>
      <View style={{flexDirection:'row',margin:10}}>
              <View style={{backgroundColor:'#c28774',borderTopLeftRadius:5,borderBottomLeftRadius:5,height:45,flex:1,justifyContent:'center'}}>
  <Text style={{color:'#3f2f27',fontSize:16,paddingHorizontal:15}}>Table No. 22.{cards.id} </Text>
                
              </View>
             
              </View>
       <View style={{backgroundColor:'#c28774',height:45,borderRadius:5,alignItems:'center',marginHorizontal:10,flexDirection:'row',}}>
              <View style={{flex:1}}>
                <Text style={{color:'#3f2f27',fontSize:16,paddingHorizontal:15,}}>Billing</Text>
                </View>
                <View style={{justifyContent:'flex-end',flexDirection:'row',paddingHorizontal:15}}>
                <Image source={require("./Images/menu.png")} style={{width:20,height:20,marginHorizontal:25,tintColor:'#4f4d4f'}}></Image>
                <Image source={require("./Images/close.png")} style={{width:15,height:15,tintColor:'#4f4d4f'}} ></Image>
               
              </View>
              </View>
           
            <View style={{flex:0.5}}>

<View style={{flexDirection:'row',justifyContent:'center',margin:15}}>

<Text style={{flex:1,fontWeight:'bold',fontSize:18,justifyContent:'center',alignItems:'center',textAlign:'center'}}>Item</Text>
<Text style={{flex:1,fontWeight:'bold',fontSize:18,alignItems:"center",justifyContent:'center',textAlign:'center'}}>Qty</Text>
<Text style={{flex:1,fontWeight:'bold',fontSize:18,alignItems:'center',justifyContent:'center',textAlign:'center'}}>Price</Text>


</View>
<FlatList
                    style={{}}
                    data={this.state.users}
                    renderItem={this._renderItem}
                    keyExtractor={item => item.id}
                />




            </View>
            <View style={{flex:0.8,backgroundColor:'white'}}>
                  <View style={{flexDirection:'row',margin:5}}>
                    <Text style={{color:'black',fontSize:16,paddingHorizontal:15,textAlign:'left',flex:0.5}}>Sub</Text>
                   
                    <Text style={{color:'black',fontSize:19,fontWeight:'bold',paddingHorizontal:15,textAlign:'right',flex:0.5}}>{"\uFE69"}<Text style={{paddingLeft:15,color:'black',fontSize:16,paddingHorizontal:15,textAlign:'right',}}>13.2</Text></Text>
                  
                  </View>
                  <View style={{flexDirection:'row',margin:5}}>
                    <Text style={{color:'black',fontSize:16,paddingHorizontal:15,textAlign:'left',flex:0.5}}>Discount</Text>
                   
                    <Text style={{color:'black',fontSize:19,fontWeight:'bold',paddingHorizontal:15,textAlign:'right',flex:0.5}}>{"\uFE69"}<Text style={{paddingLeft:15,color:'black',fontSize:16,paddingHorizontal:15,textAlign:'right',}}>13.2</Text></Text>
                  
                  </View>
                  <View style={{flexDirection:'row',margin:5}}>
                    <Text style={{color:'black',fontSize:16,paddingHorizontal:15,textAlign:'left',flex:0.5}}>Tax</Text>
                   
                    <Text style={{color:'black',fontSize:19,fontWeight:'bold',paddingHorizontal:15,textAlign:'right',flex:0.5}}>{"\uFE69"}<Text style={{paddingLeft:15,color:'black',fontSize:16,paddingHorizontal:15,textAlign:'right',}}>13.2</Text></Text>
                  
                  </View>
                  <View style={{flexDirection:'row',margin:10,backgroundColor:'#2d9adf',height:45,borderRadius:5,alignItems:'center'}}>
                    <Text style={{color:'white',fontSize:16,paddingHorizontal:15,textAlign:'left',flex:0.5,fontSize:19,fontWeight:'bold'}}>PAY</Text>
                   
                    <Text style={{color:'white',fontSize:19,fontWeight:'bold',paddingHorizontal:15,textAlign:'right',flex:0.5}}>{"\uFE69"}<Text style={{paddingLeft:15,color:'white',fontSize:16,paddingHorizontal:15,textAlign:'right',}}>13.2</Text></Text>
                  
                  </View>

                  <View style={{flexDirection:'row',marginHorizontal:5}}>

                    <TouchableOpacity style={{flex:0.5,flexDirection:'row',margin:5}} onPress={()=>alert("Order")}>
                     
                    <View style={{backgroundColor:'#2d9adf',borderTopLeftRadius:5,borderBottomLeftRadius:5,height:40,justifyContent:'center',alignItems:'center',width:45}}>
                    <Image source={require("./Images/telegram.png")} style={{width:15,height:15,tintColor:'white'}} ></Image>
                    </View>
                    <View style={{backgroundColor:'#91cbed',borderTopRightRadius:5,borderBottomRightRadius:5,height:40,justifyContent:'center',flex:1}}>
                <Text style={{color:'#3f2f27',fontSize:16,paddingHorizontal:15}}>Order</Text>
                
           
              </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:0.5,flexDirection:'row',margin:5}} onPress={()=>alert("Discount")}>
                  
                    <View style={{backgroundColor:'#2d9adf',borderTopLeftRadius:5,borderBottomLeftRadius:5,height:40,justifyContent:'center',alignItems:'center',width:45}}>
                    <Image source={require("./Images/discount.png")} style={{width:15,height:15,tintColor:'white'}} ></Image>
                    </View>
                    <View style={{backgroundColor:'#91cbed',borderTopRightRadius:5,borderBottomRightRadius:5,height:40,justifyContent:'center',flex:1}}>
                <Text style={{color:'#3f2f27',fontSize:16,paddingHorizontal:15}}>Discount</Text>
                
            
             
                    </View>
                    </TouchableOpacity>
                  </View>

                  <View style={{flexDirection:'row',marginHorizontal:5}}>
                  <TouchableOpacity style={{flex:0.5,flexDirection:'row',margin:5}} onPress={()=>alert("Cancel")}>

<View style={{backgroundColor:'#f77043',borderTopLeftRadius:5,borderBottomLeftRadius:5,height:40,justifyContent:'center',alignItems:'center',width:45}}>
<Image source={require("./Images/close.png")} style={{width:15,height:15,tintColor:'white'}} ></Image>
</View>
<View style={{backgroundColor:'#c28774',borderTopRightRadius:5,borderBottomRightRadius:5,height:40,justifyContent:'center',flex:1}}>
<Text style={{color:'#3f2f27',fontSize:16,paddingHorizontal:18}}>Cancel</Text>

</View>

</TouchableOpacity>

<TouchableOpacity style={{flex:0.5,flexDirection:'row',margin:5}} onPress={()=>alert("Pay")}>
                          
                            

                    <View style={{backgroundColor:'#2d9adf',borderTopLeftRadius:5,borderBottomLeftRadius:5,height:40,justifyContent:'center',alignItems:'center',width:45}}>
                    <Image source={require("./Images/credit-card.png")} style={{width:15,height:15,tintColor:'white'}} ></Image>
                    </View>
                    <View style={{backgroundColor:'#91cbed',borderTopRightRadius:5,borderBottomRightRadius:5,height:40,justifyContent:'center',flex:1}}>
                <Text style={{color:'#3f2f27',fontSize:16,paddingHorizontal:18}}>Pay</Text>
                
              </View>
             
                   
                
                
                    </TouchableOpacity>
                  </View>



            </View>

    </View>
 
 
 
 ) }else{
return( <View style={styles.card}>
  <View style={{flexDirection:'row',margin:10}}>
          <View style={{backgroundColor:'#c28774',borderTopLeftRadius:5,borderBottomLeftRadius:5,height:45,flex:1,justifyContent:'center'}}>
<Text style={{color:'#3f2f27',fontSize:16,paddingHorizontal:15}}>Table No. 22.{cards.id} </Text>
            
          </View>
         
          </View>
   <View style={{backgroundColor:'#c28774',height:45,borderRadius:5,alignItems:'center',marginHorizontal:10,flexDirection:'row',}}>
          <View style={{flex:1}}>
            <Text style={{color:'#3f2f27',fontSize:16,paddingHorizontal:15,}}>Billing</Text>
            </View>
            <View style={{justifyContent:'flex-end',flexDirection:'row',paddingHorizontal:15}}>
            <Image source={require("./Images/menu.png")} style={{width:20,height:20,marginHorizontal:25,tintColor:'#4f4d4f'}}></Image>
            <Image source={require("./Images/close.png")} style={{width:15,height:15,tintColor:'#4f4d4f'}} ></Image>
           
          </View>
          </View>
       
        <View style={{flex:0.5}}>

<View style={{flexDirection:'row',justifyContent:'center',margin:15}}>

<Text style={{flex:1,fontWeight:'bold',fontSize:18,justifyContent:'center',alignItems:'center',textAlign:'center'}}>Item</Text>
<Text style={{flex:1,fontWeight:'bold',fontSize:18,alignItems:"center",justifyContent:'center',textAlign:'center'}}>Qty</Text>
<Text style={{flex:1,fontWeight:'bold',fontSize:18,alignItems:'center',justifyContent:'center',textAlign:'center'}}>Price</Text>


</View>
<FlatList
                style={{}}
                data={this.state.users}
                renderItem={this._renderItem}
                keyExtractor={item => item.id}
            />




        </View>
        <View style={{flex:0.8,backgroundColor:'white'}}>
              <View style={{flexDirection:'row',margin:5}}>
                <Text style={{color:'black',fontSize:16,paddingHorizontal:15,textAlign:'left',flex:0.5}}>Sub</Text>
               
                <Text style={{color:'black',fontSize:19,fontWeight:'bold',paddingHorizontal:15,textAlign:'right',flex:0.5}}>{"\uFE69"}<Text style={{paddingLeft:15,color:'black',fontSize:16,paddingHorizontal:15,textAlign:'right',}}>13.2</Text></Text>
              
              </View>
              <View style={{flexDirection:'row',margin:5}}>
                <Text style={{color:'black',fontSize:16,paddingHorizontal:15,textAlign:'left',flex:0.5}}>Discount</Text>
               
                <Text style={{color:'black',fontSize:19,fontWeight:'bold',paddingHorizontal:15,textAlign:'right',flex:0.5}}>{"\uFE69"}<Text style={{paddingLeft:15,color:'black',fontSize:16,paddingHorizontal:15,textAlign:'right',}}>13.2</Text></Text>
              
              </View>
              <View style={{flexDirection:'row',margin:5}}>
                <Text style={{color:'black',fontSize:16,paddingHorizontal:15,textAlign:'left',flex:0.5}}>Tax</Text>
               
                <Text style={{color:'black',fontSize:19,fontWeight:'bold',paddingHorizontal:15,textAlign:'right',flex:0.5}}>{"\uFE69"}<Text style={{paddingLeft:15,color:'black',fontSize:16,paddingHorizontal:15,textAlign:'right',}}>13.2</Text></Text>
              
              </View>
              <View style={{flexDirection:'row',margin:10,backgroundColor:'#2d9adf',height:45,borderRadius:5,alignItems:'center'}}>
                <Text style={{color:'white',fontSize:16,paddingHorizontal:15,textAlign:'left',flex:0.5,fontSize:19,fontWeight:'bold'}}>PAY</Text>
               
                <Text style={{color:'white',fontSize:19,fontWeight:'bold',paddingHorizontal:15,textAlign:'right',flex:0.5}}>{"\uFE69"}<Text style={{paddingLeft:15,color:'white',fontSize:16,paddingHorizontal:15,textAlign:'right',}}>13.2</Text></Text>
              
              </View>

            

        </View>

</View>


);
 



  }
};




     _renderItem = ({ item, index }) => {
      return (
        <View style={{flexDirection:'row',justifyContent:'center',marginHorizontal:15,marginVertical:5,alignItems:'center'}}>

      <Text style={{flex:1,fontSize:16,justifyContent:'center',alignItems:'center',textAlign:'center',}}>{item.item}</Text>
      <Text style={{flex:1,fontSize:16,alignItems:"center",justifyContent:'center',textAlign:'center'}}>{item.qty}</Text>
      <Text style={{fontSize:16,fontWeight:'bold',textAlign:'center',flex:1}}>{"\uFE69"}<Text style={{paddingLeft:15,color:'black',fontSize:16,paddingHorizontal:15,textAlign:'right',}}>{item.price}</Text></Text>
                  
        
        </View>

      )
  }



    render() {
        return (
          <View style={{flex:1,backgroundColor:'white'}}>
 


<Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwiped={() => this.onSwiped('general')}
          onSwipedLeft={() => this.onSwiped('left')}
          onSwipedRight={() => this.onSwiped('right')}
          onSwipedTop={() => this.onSwiped('top')}
          onSwipedBottom={() => this.onSwiped('bottom')}
          onTapCard={this.swipeLeft}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={75}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          stackSeparation={15}
          overlayLabels={{
            bottom: {
              title: 'BLEAH',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            },
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30
                }
              }
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30
                }
              }
            },
            top: {
              title: 'SUPER LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            }
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
        >
         <View style={{flexDirection:'row',margin:10}}>
              <View style={{backgroundColor:'#c28774',borderTopLeftRadius:5,borderBottomLeftRadius:5,height:45,flex:1,justifyContent:'center'}}>
                <Text style={{color:'#3f2f27',fontSize:16,paddingHorizontal:15}}>Table No.22</Text>
                
              </View>
              <TouchableOpacity style={{backgroundColor:'#4f4d4f',borderTopRightRadius:5,borderBottomRightRadius:5,height:45,justifyContent:'center',alignItems:'center',width:45}} onPress={()=>this.addElementView(this.state.cards)}>
                <Text style={{color:'white',fontSize:45}}>+</Text>
              </TouchableOpacity>
              </View>
        </Swiper>




           
          </View>
        );
      }
    
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: '#d6d6d6'
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  }
})