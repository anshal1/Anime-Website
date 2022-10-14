const Cp=(word)=>{
    const to_capital = word.slice(0,1);
    const uppercase = to_capital.toUpperCase()
    const remaining_word = word.slice(1);
    return uppercase + remaining_word;
}
export default Cp