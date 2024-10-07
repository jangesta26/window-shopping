const products = [
    {
      id: 1,
      categoryName:`Men's Apparel`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRy3_kPRddsdtwCWzEIiS__56A2B4I66wZtYRHlwte6Y4TvgLAv32G1Q-4VTyw2zxRlR-hYR23qg67EeibwE1LnYm6VdtGXCEfXJISYx5ZzFXZuIo241A2Q&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      sold: '10k+',
      star: 4.95,
      badge:'Sulit Deal'
    },
    {
      id: 2,
      categoryName:`Men's Apparel`,
      title: 'Dri-Fit',
      href: '#',
      imageSrc: 'https://img.lazcdn.com/g/p/9ff06a8b96b56c3695f91ddccda5a5c4.png_720x720q80.png',
      imageAlt: "UNISEX",
      price: '$20',
      color: 'Red',
      sold: '5.5k+',
      star: 4.2,
      badge:'Sulit Deal'
    },
    {
      id: 3,
      categoryName:`Men's Apparel`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQTuxnm5QJWN2EHL489TmZcp1DeBeCbZiKzRzWoz9ASiBoH5DFhrhV_vK5zoQfdpJI32HSAH_Aee6YzpcTlWKNxHkB4epG3APO3AjVFHJqRQ3rU2NdhzLrAjA&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      sold: '90',
      star: 2,
      badge:''
    },
    {
      id: 4,
      categoryName:`Men's Apparel`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRh3rhgveOoUM0I6xASJGMm8yhZnkXLEoh8i76objIxkMOCDPCd8xXGMaOriOD73xQGWdKdUPhi7uJ3r45WS2xkfpirsnnpdGwzfObPx5Q&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      sold: '8',
      star: 1,
      badge:''
    },
    {
      id: 5,
      categoryName:`Men's Apparel`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT_r6ksHFzb7WaP2T8W4y1RYa7zuiuqe8KjPpRGwxhLsgmdB0F_qxgzVDz9G0516CeHgiTzXWPpnn6yMHQ6RoYK8PzA3cqOj19fQq7NCrj1RKVvK64t6_rugoI&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      sold: '11.2k+',
      star: 4.95,
      badge:'Sulit Deal'
    },
    {
      id: 6,
      categoryName:`Men's Apparel`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT1BDGrGdLv9fsl8yI48rNz_BAcouNUEyHQda1BC7JNKnuU5-ql_tTPW5spHAgjv6OvsbiQCGAgTeYh60amsOulrRWTmUSpQGze5f0dQmY&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      sold: '888',
      star: 3.85,
      badge:''
    },
    {
      id: 7,
      categoryName:`Men's Apparel`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ5ctw99jhXknpH6YZdZbRZnRb4fUNdXYHY46XPFSdxJC5JFqybpairzQtKBAk5R-p2I1U0sdkcbDFUBK6Qt9zvyzzw5CoTCXf1Iezawlk&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      sold: '307',
      star: 2.95,
      badge:''
    },
    {
      id: 8,
      categoryName:`Men's Apparel`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSH3mI85Syzc3kvOQn4ys4ejwg0b9AB0GkZl93DNODsAr6ydKO57dqXp4w2fYdqZEdrU7z4l4G-XjlK-W7IXWEYNY9CMARXXURs0le-4uXI3LrLOIpsBV9i&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      sold: '455',
      star: 4.10,
      badge:''
    },
  {
      id: 9,
      categoryName:`Men's Apparel`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRZi9Al2VLI3O9V_Jz251icNjH2rQFRnctk4_sVjuFGUF67YOpz9X7AQ4AUUSwIxOVa2op9VDKrUmJEQCebaDGYAG15_a1jP7uuqNp71SVl4rgE_h81UT_8&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      sold: '999',
      star: 3.50,
      badge:'Sulit Deal'
    },
  {
      id: 10,
      categoryName:`Men's Apparel`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTtXGDWME8qFT2Et9yhBzCcACGocwPnIRig_35TbiM09oiHPbdHNrkI-7L9_53awsR4vOJ4rC7EMUehkeWZnfbVMaa_hUEUF1f4DqMf6t7QpOl1G5CQyDad&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      sold: '999',
      star: 3.50,
      badge:'Sulit Deal'
    },
  {
      id: 11,
      categoryName:`Men's Apparel`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRjCJs7UH_YZuj1mgR_qGGEy-ZcoiUVW0dH1nFhXMg_oM0LsXSM1cIJeHgAQD-gyl2Hp0A46czDZAWVUkNYnjOhBszSLUaVhtgxxnr6L5YnHYJuxR0VtlQIew&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      sold: '999',
      star: 3.50,
      badge:'Sulit Deal'
    },
  {
      id: 13,
      categoryName:`Women's Apparel`,
      title: 'Crop top',
      href: '#',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTFu1mIF-kHDR4Kv9D2nRiV3R9gCGNlfiDpQRCJIq6sjOtJ0ZdC6BrvAwjpSaPU_xqZz85Hq4SyBiGoEESBTMSFMD4jnUIh42u7dw5mPm4&usqp=CAE',
      imageAlt: "Front of women's Knitted Top.",
      price: '$25',
      color: 'pink',
      sold: '444',
      star: 3.50,
      badge:'Sulit Deal'
    },
  {
      id: 14,
      categoryName:`Women's Apparel`,
      title: 'Dress',
      href: '#',
      imageSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSVx35bOY9ppzgKJ57q7M_zBJsfWc8YEF_GMl-bwvpq-Vx1MKUOd0RkLsOt6q-J6NBFnOwL4dZgr91IxkLivib-JQRl8bhHFtYe1WmKt8a0&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$55',
      color: 'Black',
      sold: '1.5K',
      star: 4.50,
      badge:'Sulit Deal'
    },
  {
      id: 15,
      categoryName:`Women's Apparel`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRv64sIwe0IErUZTWVJIWj11dCzYXc3HIclsghNq9nSBMOxSfVrWvS002qG25lQ0-L0Jc9_ddgQrkiORynxk59A-jA6k-vQxubkEswcGeEle3z6JzQPP4qr',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$13',
      color: 'Black',
      sold: '803',
      star: 3.50,
      badge:'Sulit Deal'
    },
  {
      id: 16,
      categoryName:`Women's Apparel`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSyfUGdGZRTpi4Fs009k-r9D9ANurcOE1jgG-18Y-IIb6pseMq-cTp3-7Ce4szy8Fkn0f9Vtc3EYkUJ-g_zbvixdmT34Ed7GRkG-NexjKYAn39s_J7hn3Bk&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$28',
      color: 'Black',
      sold: '111',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 17,
      categoryName:`Women's Apparel`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQKhpl37pkNMbJ4RoHdPyKzic9D-At-g9UszzQ-ji5KpNa2N6l4q-llyijwkOK2g-Si68miLHxCtJChe2lABSemCVoG1yDe5dRuAYdZs_U&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$32.50',
      color: 'Black',
      sold: '6.5K',
      star: 4.50,
      badge:'Sulit Deal'
    },
  {
      id: 18,
      categoryName:`Women's Apparel`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrKA7f6Wz-77g2NRGHXevnNXZG0RyhS9neoCogOsx9ZUBlaPNl4Z072txDUyEgl6zD3e7IT3HT8PyjDX0Eb8Bd8s8Xhhf_xR32oxcE8wc&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$12',
      color: 'Black',
      sold: '799',
      star: 3.50,
      badge:'Sulit Deal'
    },
  {
      id: 19,
      categoryName:`Women's Apparel`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQeuel5o6jZMQy7dkfWGSfHXSY_0dhLOMogoxboQ43vKB2kNif6bMa6MpQGv25t-Y7xKG8L0nTzcgpalylV7BEKACi1XX_ThW6Qzh2bGhqQ&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$22',
      color: 'Black',
      sold: '586',
      star: 3.50,
      badge:'Sulit Deal'
    },
  {
      id: 20,
      categoryName:`Men Shoes`,
      title: 'Non-Slip Rubber',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ_ChpydNScgM_KegDA57rte2ncsNOXhtb9HB96rhOZju8fMSDswY0uAGg6iJxTSC49YIfV1eatBkl3T4s5dVnEGJFRL_IFqew6ENc6gKk&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$9',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 21,
      categoryName:`Men Shoes`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSiDfP5_SuN7MHs1ZsE9rZ1wSYbzwv6B3F4e0mqxAV8c48PZOpxvvADuonvUJt7ud_mPiJ1jBhgnDrOQB5JjBpc-yNyKfI7OFyA75bJrVmj4tM_hdvA6P7mqA&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 22,
      categoryName:`Men Shoes`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS5V6RIBfdSXL_Lba2FoRgMvcWvZGv0EaaGnK98ahwc2AqvYJlctV7G08lRRjhKsjhx2_oyZ-LtQ3-rbM9cyO6rHvCdRUtT_Rzk_-0NP29vUKqvbxgLbXDA7g&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 23,
      categoryName:`Men Shoes`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSfG5ZiHrOf49l36D_AwFqQBN6EYgETW08AV3DJGVUzo6kW0Kj9NDL9T_mWJ75bDAs8m4IRzzj8PuN1a1FYBEy16KLXKn8Wnmt4prBuMn8wdLBaGMbKO5s5&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 24,
      categoryName:`Men Shoes`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSt-iT2rXDkyDvmgyC1CRfiA2j8ktJDFiPY3Ybq52IPh13-LsQHVD-il4vVxadxdi0DgLlbehqksxinRHUVnnLOyMKvvTP2Pycq7Lu2JjeO&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 25,
      categoryName:`Men Shoes`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR7Z7jXw2bqGX8_WlmlHFAZ7Dt29rPmFH-7YDZCViPaeP7ec0EL6KlNOSBCo2Z3h2ZuCxSx2mF7XQcxhULsFPjqwNVtHYcIZzKjQxhkyn5z&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 26,
      categoryName:`Men Shoes`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQrn_pGmxKBCuiwdwdnL-M9NWVvyciZo-HrFHYmRn22zaD0K6nV7RPkGyYIBykHY5S_k50TC9M1DKJ711EsBI6y0SCCYppLe9Sj18Z_EHBEPG_SrwTXRW17AaU&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 27,
      categoryName:`Men Shoes`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSL29_PG9gvKjTezUHQ2yQ3_ps4i12304Eovs_fqWsX2H_l1vautab1nQrYHO9C90azxygu7xjF9SClSHIot88Zof3tltL23tK8cI-aic0v&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 28,
      categoryName:`Women Shoes`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQi9VGUgGFRv6grs7Daj7x2LQPFlqyQDaEzvHZDXSKTC5aMZTiU08O7FymqKJn1m4Z_WRJV4CVJa5T-J9qrLHAQEFib8i4E-5J479qZ2lHz&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 29,
      categoryName:`Women Shoes`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQi9VGUgGFRv6grs7Daj7x2LQPFlqyQDaEzvHZDXSKTC5aMZTiU08O7FymqKJn1m4Z_WRJV4CVJa5T-J9qrLHAQEFib8i4E-5J479qZ2lHz&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 30,
      categoryName:`Women Shoes`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQi9VGUgGFRv6grs7Daj7x2LQPFlqyQDaEzvHZDXSKTC5aMZTiU08O7FymqKJn1m4Z_WRJV4CVJa5T-J9qrLHAQEFib8i4E-5J479qZ2lHz&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 31,
      categoryName:`Women Shoes`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQi9VGUgGFRv6grs7Daj7x2LQPFlqyQDaEzvHZDXSKTC5aMZTiU08O7FymqKJn1m4Z_WRJV4CVJa5T-J9qrLHAQEFib8i4E-5J479qZ2lHz&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 32,
      categoryName:`Women Shoes`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQi9VGUgGFRv6grs7Daj7x2LQPFlqyQDaEzvHZDXSKTC5aMZTiU08O7FymqKJn1m4Z_WRJV4CVJa5T-J9qrLHAQEFib8i4E-5J479qZ2lHz&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 33,
      categoryName:`Women Shoes`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQi9VGUgGFRv6grs7Daj7x2LQPFlqyQDaEzvHZDXSKTC5aMZTiU08O7FymqKJn1m4Z_WRJV4CVJa5T-J9qrLHAQEFib8i4E-5J479qZ2lHz&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 34,
      categoryName:`Women Shoes`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQi9VGUgGFRv6grs7Daj7x2LQPFlqyQDaEzvHZDXSKTC5aMZTiU08O7FymqKJn1m4Z_WRJV4CVJa5T-J9qrLHAQEFib8i4E-5J479qZ2lHz&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 35,
      categoryName:`Women Shoes`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQi9VGUgGFRv6grs7Daj7x2LQPFlqyQDaEzvHZDXSKTC5aMZTiU08O7FymqKJn1m4Z_WRJV4CVJa5T-J9qrLHAQEFib8i4E-5J479qZ2lHz&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 36,
      categoryName:`Women Bags`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQBVVBxKL-Uygz49dtnCUdNd9pMPOM0uR3LUvb4Lb6v1S8qSduxeD16S-S4p56sDD7p9lL7LqL2d581K6gb_ZTLMkNncWnszlUA7xnvOj8S&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 37,
      categoryName:`Women Bags`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQBVVBxKL-Uygz49dtnCUdNd9pMPOM0uR3LUvb4Lb6v1S8qSduxeD16S-S4p56sDD7p9lL7LqL2d581K6gb_ZTLMkNncWnszlUA7xnvOj8S&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 38,
      categoryName:`Women Bags`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQBVVBxKL-Uygz49dtnCUdNd9pMPOM0uR3LUvb4Lb6v1S8qSduxeD16S-S4p56sDD7p9lL7LqL2d581K6gb_ZTLMkNncWnszlUA7xnvOj8S&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 39,
      categoryName:`Women Bags`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQBVVBxKL-Uygz49dtnCUdNd9pMPOM0uR3LUvb4Lb6v1S8qSduxeD16S-S4p56sDD7p9lL7LqL2d581K6gb_ZTLMkNncWnszlUA7xnvOj8S&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 40,
      categoryName:`Women Bags`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQBVVBxKL-Uygz49dtnCUdNd9pMPOM0uR3LUvb4Lb6v1S8qSduxeD16S-S4p56sDD7p9lL7LqL2d581K6gb_ZTLMkNncWnszlUA7xnvOj8S&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 41,
      categoryName:`Women Bags`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQBVVBxKL-Uygz49dtnCUdNd9pMPOM0uR3LUvb4Lb6v1S8qSduxeD16S-S4p56sDD7p9lL7LqL2d581K6gb_ZTLMkNncWnszlUA7xnvOj8S&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 42,
      categoryName:`Women Bags`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQBVVBxKL-Uygz49dtnCUdNd9pMPOM0uR3LUvb4Lb6v1S8qSduxeD16S-S4p56sDD7p9lL7LqL2d581K6gb_ZTLMkNncWnszlUA7xnvOj8S&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 43,
      categoryName:`Women Bags`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQBVVBxKL-Uygz49dtnCUdNd9pMPOM0uR3LUvb4Lb6v1S8qSduxeD16S-S4p56sDD7p9lL7LqL2d581K6gb_ZTLMkNncWnszlUA7xnvOj8S&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 44,
      categoryName:`Mobiles & Gadgets`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRGrKtPamWLzZjR7yod3S_Ji_KBcdhUbBvkN6pGqAJUkek-Ucb67uAVPwB_bvRX80gf5poacwCs8eY8QZvt019dbMg3HCGZAx6D1115bxW_&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 45,
      categoryName:`Mobiles & Gadgets`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT3QKWcMhlSV3cGHcsul9BWUxhbevC0McV5hWlMvZB_JI1JyJzzjrXClJO4wOQHtY2_7ME11ceygVKNbfG68LC0HIg8jCqMg82eibFeyPVF5ziyDAgDfD6o&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 46,
      categoryName:`Mobiles & Gadgets`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTZLUe-_l1kvbVZCZSAyBodaCwXBKkl7G4vnZNzuNFGPyYhWv8N_dTUXPqSjwaVvaNyWGr-T68GelPTKX2-oeP8zJ2llEIPZsax6DYAydsJ5Y8xo_L8uu5CeQ&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 47,
      categoryName:`Mobiles & Gadgets`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTZLUe-_l1kvbVZCZSAyBodaCwXBKkl7G4vnZNzuNFGPyYhWv8N_dTUXPqSjwaVvaNyWGr-T68GelPTKX2-oeP8zJ2llEIPZsax6DYAydsJ5Y8xo_L8uu5CeQ&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 48,
      categoryName:`Mobiles & Gadgets`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT3QKWcMhlSV3cGHcsul9BWUxhbevC0McV5hWlMvZB_JI1JyJzzjrXClJO4wOQHtY2_7ME11ceygVKNbfG68LC0HIg8jCqMg82eibFeyPVF5ziyDAgDfD6o&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 49,
      categoryName:`Mobiles & Gadgets`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT3QKWcMhlSV3cGHcsul9BWUxhbevC0McV5hWlMvZB_JI1JyJzzjrXClJO4wOQHtY2_7ME11ceygVKNbfG68LC0HIg8jCqMg82eibFeyPVF5ziyDAgDfD6o&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 50,
      categoryName:`Mobiles & Gadgets`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT3QKWcMhlSV3cGHcsul9BWUxhbevC0McV5hWlMvZB_JI1JyJzzjrXClJO4wOQHtY2_7ME11ceygVKNbfG68LC0HIg8jCqMg82eibFeyPVF5ziyDAgDfD6o&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
  {
      id: 51,
      categoryName:`Mobiles & Gadgets`,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT3QKWcMhlSV3cGHcsul9BWUxhbevC0McV5hWlMvZB_JI1JyJzzjrXClJO4wOQHtY2_7ME11ceygVKNbfG68LC0HIg8jCqMg82eibFeyPVF5ziyDAgDfD6o&usqp=CAE',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'Black',
      sold: '233',
      star: 2.50,
      badge:'Sulit Deal'
    },
    // More products...
  ]
  export default products