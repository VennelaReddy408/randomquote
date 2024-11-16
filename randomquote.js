let a=document.getElementById("Quote")
const quotes=[
    "ప్రతి అవకాశాన్ని వినియోగించుకోండి, అది ఒక్కసారి మాత్రమే వస్తుంది.",
    "జీవితం ఒక ప్రయాణం, ప్రతి రోజు పాఠం నేర్చుకోవాలి.",
    "Well done is better than well said.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up",
    "Life is a succession of lessons which must be lived to be understood.",
    "నమ్మకం సగం విజయానికీ, సమయ పాలన పూర్తిగా విజయానికీ దారి చూపిస్తాయి.",
    "బాధలతోనే బలహీనత కాదు, బాధలతోనే బలం కూడా పెరుగుతుంది.",
    "సంఘర్షణలు ఎదుర్కొనే వారు మాత్రమే గొప్ప విజయాన్ని సాధిస్తారు.",
    "పరాజయం వద్దు అనుకునేవారు, విజయం పొందడంలో విఫలమవుతారు.",
    "తప్పు చేయడం తప్పు కాదు, కానీ తప్పుని ఒప్పుకోకపోవడం తప్పు.",
    "సంతోషం మనిషి చేతుల్లోనే ఉంది, అదీ ఆలోచనల పైనే ఆధారపడి ఉంటుంది.",
    "మనస్సు సమాధానం తెలిస్తే సమస్య కూడా సులువుగానే పరిష్కరించుకోవచ్చు.",
    "తక్కువ సంతోషాన్ని ఆశించడం మనసుకు ఆనందాన్ని ఇస్తుంది.",
    "గుర్తుంచుకోండి, మన ప్రయత్నాలు మనని మన గమ్యానికి చేరుస్తాయి.",


];
function getQuote(){
    let singleQuote=Math.floor(Math.random() * quotes.length)
    console.log(singleQuote);
    a.textContent=quotes[singleQuote]
}