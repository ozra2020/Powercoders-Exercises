function ageCalculator(birthYear, birthMonth, futureYear, futureMonth){
    var yd = (futureYear - birthYear);
    var md = (futureMonth - birthMonth);
    if (md < 0) {
        return --yd;
    } else {
        return yd;
    }
};
document.write(ageCalculator(1989, 9, 2030, 4));