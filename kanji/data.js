const flashcards = [
  {
    part: 1,
    kanji: "参照",
    reading: "さんしょう",
    meaning: "rujukan, referensi, melihat sebagai acuan",
    sentence: "詳細については、下記の資料を参照してください。",
    sentenceReading: "しょうさい に ついて は、かき の しりょう を さんしょう して ください。",
    sentenceMeaning: "Untuk rincian lebih lanjut, silakan merujuk pada dokumen di bawah ini."
  },
  {
    part: 1,
    kanji: "距離",
    reading: "きょり",
    meaning: "jarak; selisih; perbedaan (hubungan)",
    sentence: "両国の文化的な距離は依然として大きい。",
    sentenceReading: "りょうこく の ぶんかてき な きょり は いぜん として おおきい。",
    sentenceMeaning: "Jarak budaya antara kedua negara tersebut masih tetap besar."
  },
  {
    part: 1,
    kanji: "願望",
    reading: "がんぼう",
    meaning: "keinginan, hasrat, ambisi",
    sentence: "若者の願望は社会の変化を反映している。",
    sentenceReading: "わかもの の がんぼう は しゃかい の へんか を はんえい して いる。",
    sentenceMeaning: "Hasrat kaum muda mencerminkan perubahan masyarakat."
  },
  {
    part: 1,
    kanji: "怪しい",
    reading: "あやしい",
    meaning: "mencurigakan, meragukan, aneh, tidak jelas",
    sentence: "その取引には怪しい点がいくつか見受けられる。",
    sentenceReading: "その とりひき に は あやしい てん が いくつか みうけられる。",
    sentenceMeaning: "Transaksi tersebut memiliki beberapa hal yang mencurigakan."
  },
  {
    part: 1,
    kanji: "油断",
    reading: "ゆだん",
    meaning: "lengah, ceroboh, kurang waspada",
    sentence: "一瞬の油断が重大な事故につながることがある。",
    sentenceReading: "いっしゅん の ゆだん が じゅうだい な じこ に つながる こと が ある。",
    sentenceMeaning: "Kelengahan sesaat bisa berujung pada kecelakaan serius."
  },
  {
    part: 1,
    kanji: "恥",
    reading: "はじ",
    meaning: "malu, aib, rasa hina",
    sentence: "不正行為は組織全体の恥となる。",
    sentenceReading: "ふせい こうい は そしき ぜんたい の はじ と なる。",
    sentenceMeaning: "Tindakan tidak jujur menjadi aib bagi seluruh organisasi."
  },
  {
    part: 1,
    kanji: "指摘",
    reading: "してき",
    meaning: "menunjukkan, menyoroti, mengkritik",
    sentence: "専門家は制度の問題点を指摘した。",
    sentenceReading: "せんもんか は せいど の もんだいてん を してき した。",
    sentenceMeaning: "Para ahli menyoroti masalah dalam sistem tersebut."
  },
  {
    part: 1,
    kanji: "投票",
    reading: "とうひょう",
    meaning: "pemungutan suara, voting",
    sentence: "国民は選挙で代表者に投票する。",
    sentenceReading: "こくみん は せんきょ で だいひょうしゃ に とうひょう する。",
    sentenceMeaning: "Warga memberikan suara kepada wakilnya dalam pemilu."
  },
  {
    part: 1,
    kanji: "批評",
    reading: "ひひょう",
    meaning: "kritik, ulasan, penilaian",
    sentence: "その作品は多くの批評家から高い評価を受けた。",
    sentenceReading: "その さくひん は おおく の ひひょうか から たかい ひょうか を うけた。",
    sentenceMeaning: "Karya tersebut mendapat penilaian tinggi dari para kritikus."
  },
  {
    part: 1,
    kanji: "催し",
    reading: "もよおし",
    meaning: "acara, kegiatan, penyelenggaraan",
    sentence: "地域交流を目的とした催しが開催された。",
    sentenceReading: "ちいき こうりゅう を もくてき と した もよおし が かいさい された。",
    sentenceMeaning: "Acara untuk pertukaran komunitas telah diselenggarakan."
  },
  {
    part: 1,
    kanji: "討論",
    reading: "とうろん",
    meaning: "diskusi, debat, perdebatan",
    sentence: "公開の場で活発な討論が行われた。",
    sentenceReading: "こうかい の ば で かっぱつ な とうろん が おこなわれた。",
    sentenceMeaning: "Diskusi aktif dilakukan di forum terbuka."
  },
  {
    part: 1,
    kanji: "混乱",
    reading: "こんらん",
    meaning: "kekacauan, kebingungan, ketidakteraturan",
    sentence: "突然の変更により現場は混乱した。",
    sentenceReading: "とつぜん の へんこう に より げんば は こんらん した。",
    sentenceMeaning: "Perubahan mendadak menyebabkan kekacauan di lapangan."
  },
  {
    part: 1,
    kanji: "硬貨",
    reading: "こうか",
    meaning: "koin, uang logam",
    sentence: "自動販売機は一部の硬貨しか使用できない。",
    sentenceReading: "じどうはんばいき は いちぶ の こうか しか しよう できない。",
    sentenceMeaning: "Mesin penjual otomatis hanya menerima koin tertentu."
  },
  {
    part: 1,
    kanji: "容姿",
    reading: "ようし",
    meaning: "penampilan, rupa, paras",
    sentence: "人を容姿だけで判断すべきではない。",
    sentenceReading: "ひと を ようし だけ で はんだん すべき で は ない。",
    sentenceMeaning: "Seseorang tidak seharusnya dinilai hanya dari penampilannya."
  },
  {
    part: 1,
    kanji: "講師",
    reading: "こうし",
    meaning: "pengajar, dosen, instruktur",
    sentence: "外部から専門の講師が招かれた。",
    sentenceReading: "がいぶ から せんもん の こうし が まねかれた。",
    sentenceMeaning: "Instruktur ahli diundang dari luar."
  },
  {
    part: 1,
    kanji: "密閉",
    reading: "みっぺい",
    meaning: "tertutup rapat, kedap, penyegelan",
    sentence: "容器は完全に密閉されている。",
    sentenceReading: "ようき は かんぜん に みっぺい されて いる。",
    sentenceMeaning: "Wadah tersebut tertutup rapat sepenuhnya."
  },
  {
    part: 1,
    kanji: "快い",
    reading: "こころよい",
    meaning: "menyenangkan, nyaman, enak dirasakan",
    sentence: "快い返事をいただき、感謝している。",
    sentenceReading: "こころよい へんじ を いただき、かんしゃ して いる。",
    sentenceMeaning: "Saya berterima kasih atas jawaban yang menyenangkan."
  },
  {
    part: 1,
    kanji: "鮮やか",
    reading: "あざやか",
    meaning: "cerah, jelas, mencolok, tajam",
    sentence: "彼女は鮮やかな手法で問題を解決した。",
    sentenceReading: "かのじょ は あざやか な しゅほう で もんだい を かいけつ した。",
    sentenceMeaning: "Ia menyelesaikan masalah dengan cara yang cemerlang."
  },
  {
    part: 1,
    kanji: "貴重",
    reading: "きちょう",
    meaning: "berharga, bernilai, langka",
    sentence: "この資料は研究にとって貴重である。",
    sentenceReading: "この しりょう は けんきゅう に とって きちょう で ある。",
    sentenceMeaning: "Dokumen ini sangat berharga bagi penelitian."
  }
];
