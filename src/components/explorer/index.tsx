import {View, Dimensions, TouchableOpacity, TextComponent} from "react-native";
import AuthContainer from "../ui/AuthContainer";
import DateSelector from "../ui/DateSelector";
import TextField from "../ui/TextField";
import { useState } from "react";


const RenderExplorer = () =>  {
    const {width, } = Dimensions.get("window");
    const[checkIn, setCheckIn] = useState("");
    const[checkOut, setCheckOut] = useState("");
    const[calendar, setCalendar] = useState < "checkin" | "checkout" >();

    return (
        <AuthContainer>
            {/*children*/}
            
            <View 
                style={{
                display: "flex", 
                flexDirection: "row",
                gap: width * 0.05,
                justifyContent: "center"
                }}>

                <View style= {{display: "flex",flexDirection: "column"}}>
                    <TouchableOpacity onPress={() => setCalendar("checkin")}>
                        <View style={{width: width * 0.42}}>
                            <TextField
                                label="Check-in"
                                icon={{ lib: "FontAwesome5", name: "calendar-alt" }}
                                placeholder="selecione uma data"
                                value= {checkIn}
                            />
                        </View>
                    </TouchableOpacity>
                    {/*<DateSelector/> */}
                        
                    {calendar === "checkin" && (
                        <DateSelector
                        onSelectDate={(date) =>
                            setCheckIn(date)
                        }/>
                    )}
                </View>

                <View style= {{display: "flex",flexDirection: "column"}}>
                    <TouchableOpacity onPress={() => setCalendar("checkout")}>
                        <View style={{width: width * 0.42}}>
                            <TextField
                                label="Check-out"
                                icon={{ lib: "FontAwesome5", name: "calendar-alt" }}
                                placeholder="selecione uma data"
                                value={checkOut}
                            />
                        </View>
                    </TouchableOpacity>

                    {/*<DateSelector/> */}
                    {calendar === "checkout" && (
                        <DateSelector
                        onSelectDate={(date) =>
                            setCheckOut(date)
                        }/>
                    )}

                </View>
            </View>
        </AuthContainer>
    );
}
export default RenderExplorer;