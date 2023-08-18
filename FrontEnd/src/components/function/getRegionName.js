export function getRegionName(gugun) {
    const regionNames = {
        "0": "서울",
        "1": "경기",
        "2": "인천",
        "3": "강원",
        "4": "대구",
        "5": "대전",
        "6": "경남",
        "7": "경북",
        "8": "부산",
        "9": "울산",
        "10": "광주",
        "11": "제주",
        "12": "전남",
        "13": "전북",
        "14": "충남",
        "15": "충북"
    };
  
    return regionNames[gugun] || "알 수 없음";
  }
  