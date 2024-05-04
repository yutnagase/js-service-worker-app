// 都道府県データ
const prefectures = [
  {
    name: "北海道",
    capital: "札幌",
    address: "北海道札幌市中央区北1条西2-1",
    specialty: "ジンギスカン",
    feature: "自然が豊かで四季折々の風景が楽しめる",
  },
  {
    name: "青森県",
    capital: "青森",
    address: "青森県青森市長島1-1-1",
    specialty: "りんご",
    feature: "津軽海峡の幻想的な雰囲気が魅力",
  },
  {
    name: "岩手県",
    capital: "盛岡",
    address: "岩手県盛岡市内丸12-1",
    specialty: "じゃじゃ麺",
    feature: "奥州藩の歴史と風光明媚な自然が共存",
  },
  {
    name: "宮城県",
    capital: "仙台",
    address: "宮城県仙台市青葉区一番町1-1",
    specialty: "牛タン",
    feature: "日本三景の一つ松島や仙台城跡がある",
  },
  {
    name: "秋田県",
    capital: "秋田",
    address: "秋田県秋田市千秋公園1-1",
    specialty: "きりたんぽ",
    feature: "日本三大地蔵尊の一つがある",
  },
  {
    name: "山形県",
    capital: "山形",
    address: "山形県山形市三日町1-1",
    specialty: "そば",
    feature: "米沢牛や山寺などの観光地がある",
  },
  {
    name: "福島県",
    capital: "福島",
    address: "福島県福島市杉妻町1",
    specialty: "桃",
    feature: "日本三景の一つ浜通りを有し、郡山市は都市部も充実",
  },
  {
    name: "茨城県",
    capital: "水戸",
    address: "茨城県水戸市笠原町3-1-1",
    specialty: "水戸黄門漬",
    feature: "健康都市であり、鹿島神宮や水戸黄門まつりが有名",
  },
  {
    name: "栃木県",
    capital: "宇都宮",
    address: "栃木県宇都宮市東宿郷1-1",
    specialty: "餃子",
    feature: "日光東照宮や那須高原などの観光地がある",
  },
  {
    name: "群馬県",
    capital: "前橋",
    address: "群馬県前橋市川原町3-1",
    specialty: "桐生のよもぎ団子",
    feature: "上州の歴史や温泉地がある",
  },
  {
    name: "埼玉県",
    capital: "さいたま",
    address: "埼玉県さいたま市中央区本町1-1",
    specialty: "うなぎ",
    feature: "首都圏に隣接し、大宮駅や秩父などがある",
  },
  {
    name: "千葉県",
    capital: "千葉",
    address: "千葉県千葉市中央区富士見2-6-1",
    specialty: "房総のアンコウ",
    feature: "東京ディズニーリゾートや銚子丸などがある",
  },
  {
    name: "東京都",
    capital: "東京",
    address: "東京都新宿区西新宿2-8-1",
    specialty: "寿司",
    feature: "首都であり、東京スカイツリーや秋葉原などがある",
  },
  {
    name: "神奈川県",
    capital: "横浜",
    address: "神奈川県横浜市西区みなとみらい1-1-1",
    specialty: "横浜ラーメン",
    feature: "横浜港や横浜中華街などの観光地がある",
  },
  {
    name: "新潟県",
    capital: "新潟",
    address: "新潟県新潟市中央区万代1-4-1",
    specialty: "新潟の味噌",
    feature: "日本海に面し、雪国として有名な観光地がある",
  },
  {
    name: "富山県",
    capital: "富山",
    address: "富山県富山市新総曲輪1-8",
    specialty: "富山ブラックラーメン",
    feature: "立山黒部アルペンルートなどの観光地がある",
  },
  {
    name: "石川県",
    capital: "金沢",
    address: "石川県金沢市広坂1-1",
    specialty: "金沢のかに",
    feature: "加賀百万石まつりや兼六園などの観光地がある",
  },
  {
    name: "福井県",
    capital: "福井",
    address: "福井県福井市大手3-17-1",
    specialty: "越前ガニ",
    feature: "越前海岸や一乗谷朝倉氏遺跡などの観光地がある",
  },
  {
    name: "山梨県",
    capital: "甲府",
    address: "山梨県甲府市丸の内1-1",
    specialty: "ほうとう",
    feature: "富士山と富士五湖などの観光地がある",
  },
  {
    name: "長野県",
    capital: "長野",
    address: "長野県長野市大字南長池字中野6005-1",
    specialty: "信州そば",
    feature: "信州の自然や歴史的な観光地がある",
  },
  {
    name: "岐阜県",
    capital: "岐阜",
    address: "岐阜県岐阜市八島町1-1",
    specialty: "ひつまぶし",
    feature: "岐阜城や白川郷などの観光地がある",
  },
  {
    name: "静岡県",
    capital: "静岡",
    address: "静岡県静岡市葵区追手町9-6",
    specialty: "お茶",
    feature: "富士山や伊豆半島などの観光地がある",
  },
  {
    name: "愛知県",
    capital: "名古屋",
    address: "愛知県名古屋市中区三の丸3-1",
    specialty: "味噌カツ",
    feature: "中部地方の中心都市であり、名古屋城やオアシス２１などがある",
  },
  {
    name: "三重県",
    capital: "津",
    address: "三重県津市新町1-8-31",
    specialty: "伊勢海老",
    feature: "伊勢神宮や伊勢志摩国立公園などの観光地がある",
  },
  {
    name: "滋賀県",
    capital: "大津",
    address: "滋賀県大津市御殿浜町1-1",
    specialty: "近江牛",
    feature: "琵琶湖や比叡山などの観光地がある",
  },
  {
    name: "京都府",
    capital: "京都",
    address: "京都府京都市左京区岡崎円勝寺町10-1",
    specialty: "抹茶",
    feature: "日本の伝統と文化が色濃く残る観光地がある",
  },
  {
    name: "大阪府",
    capital: "大阪",
    address: "大阪府大阪市北区梅田3-1-1",
    specialty: "たこ焼き",
    feature: "商業やグルメの中心地であり、大阪城や道頓堀などがある",
  },
  {
    name: "兵庫県",
    capital: "神戸",
    address: "兵庫県神戸市中央区加納町6-5-1",
    specialty: "神戸牛",
    feature: "六甲山や神戸港などの観光地がある",
  },
  {
    name: "奈良県",
    capital: "奈良",
    address: "奈良県奈良市登大路町4-2",
    specialty: "梅酒",
    feature: "日本最古の歴史的遺跡である奈良公園や東大寺がある",
  },
  {
    name: "和歌山県",
    capital: "和歌山",
    address: "和歌山県和歌山市松ヶ丘1-1",
    specialty: "梅干し",
    feature: "紀伊半島や白浜温泉などの観光地がある",
  },
  {
    name: "鳥取県",
    capital: "鳥取",
    address: "鳥取県鳥取市東町1-220",
    specialty: "松葉ガニ",
    feature: "日本海に面し、鳥取砂丘や松江城などの観光地がある",
  },
  {
    name: "島根県",
    capital: "松江",
    address: "島根県松江市殿町1-5",
    specialty: "出雲そば",
    feature: "出雲大社や石見銀山などの観光地がある",
  },
  {
    name: "岡山県",
    capital: "岡山",
    address: "岡山県岡山市北区下石井1-1",
    specialty: "桃太郎",
    feature: "岡山城や倉敷美観地区などの観光地がある",
  },
  {
    name: "広島県",
    capital: "広島",
    address: "広島県広島市中区基町6-36",
    specialty: "広島風お好み焼き",
    feature: "原爆ドームや厳島神社などの観光地がある",
  },
  {
    name: "山口県",
    capital: "山口",
    address: "山口県山口市駅前1-1",
    specialty: "ふぐ",
    feature: "瀬戸内海に面し、萩城跡や錦帯橋などの観光地がある",
  },
  {
    name: "徳島県",
    capital: "徳島",
    address: "徳島県徳島市万代町1-1",
    specialty: "阿波踊り",
    feature: "阿波踊りや鳴門の渦潮などの観光地がある",
  },
  {
    name: "香川県",
    capital: "高松",
    address: "香川県高松市栗林町1-1",
    specialty: "讃岐うどん",
    feature: "讃岐うどんや栗林公園などの観光地がある",
  },
  {
    name: "愛媛県",
    capital: "松山",
    address: "愛媛県松山市一番町4-4-1",
    specialty: "道後温泉",
    feature: "道後温泉や松山城などの観光地がある",
  },
  {
    name: "高知県",
    capital: "高知",
    address: "高知県高知市帯屋町1-8",
    specialty: "かつお節",
    feature: "四国の中心都市であり、桂浜や龍馬像などの観光地がある",
  },
  {
    name: "福岡県",
    capital: "福岡",
    address: "福岡県福岡市中央区天神1-1-1",
    specialty: "明太子",
    feature:
      "九州最大の都市であり、太宰府天満宮や博多どんたくなどの観光地がある",
  },
  {
    name: "佐賀県",
    capital: "佐賀",
    address: "佐賀県佐賀市城内1-1",
    specialty: "佐賀牛",
    feature: "有明海や唐津城跡などの観光地がある",
  },
  {
    name: "長崎県",
    capital: "長崎",
    address: "長崎県長崎市城内1-1",
    specialty: "長崎ちゃんぽん",
    feature: "長崎港やグラバー園などの観光地がある",
  },
  {
    name: "熊本県",
    capital: "熊本",
    address: "熊本県熊本市中央区水前寺5-1",
    specialty: "馬刺し",
    feature: "熊本城や阿蘇山などの観光地がある",
  },
  {
    name: "大分県",
    capital: "大分",
    address: "大分県大分市府内町1-1",
    specialty: "関あじ",
    feature: "別府温泉や由布院などの観光地がある",
  },
  {
    name: "宮崎県",
    capital: "宮崎",
    address: "宮崎県宮崎市橘通西2-2",
    specialty: "宮崎牛",
    feature: "宮崎神宮や青島などの観光地がある",
  },
  {
    name: "鹿児島県",
    capital: "鹿児島",
    address: "鹿児島県鹿児島市城山町10-1",
    specialty: "かごしま黒豚",
    feature: "桜島や屋久島などの観光地がある",
  },
  {
    name: "沖縄県",
    capital: "那覇",
    address: "沖縄県那覇市泉崎1-2-2",
    specialty: "ゴーヤーチャンプルー",
    feature: "亜熱帯の美しい海と文化が魅力",
  },
];

// 都道府県一覧を生成してテーブルに表示する関数
const renderPrefectureTable = () => {
  const tableBody = document.querySelector("#prefecture-table tbody");

  prefectures.forEach((prefecture) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${prefecture.name}</td>
      <td>${prefecture.capital}</td>
    `;
    row.addEventListener("click", () => {
      openDetailModal(prefecture);
    });
    tableBody.appendChild(row);
  });
};

// 詳細画面を開く関数
const openDetailModal = (prefecture) => {
  const modal = document.getElementById("detail-modal");
  const title = document.getElementById("detail-title");
  const address = document.getElementById("detail-address");
  const specialty = document.getElementById("detail-specialty");
  const feature = document.getElementById("detail-feature");

  title.textContent = `${prefecture.name} - ${prefecture.capital}`;
  address.textContent = `住所：${prefecture.address}`;
  specialty.textContent = `名産品：${prefecture.specialty}`;
  feature.textContent = `特徴：${prefecture.feature}`;

  modal.style.display = "block";

  // モーダル外をクリックするとモーダルを閉じる
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // 閉じるボタンをクリックするとモーダルを閉じる
  const closeButton = document.querySelector(".close");
  closeButton.onclick = function () {
    modal.style.display = "none";
  };
};

// ページ読み込み時に都道府県一覧を生成
window.addEventListener("DOMContentLoaded", () => {
  renderPrefectureTable();
});
