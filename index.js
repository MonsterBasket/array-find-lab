function superbowlWin(record){
    let a = record.find(b => b.result === "W");
    if (a) return a.year;
    //else do nothing.
}