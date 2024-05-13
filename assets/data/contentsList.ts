type ContentList = {
  key: string;
  menus: {
    key: string;
    pages: {
      key: string;
      href: string;
      title: string;
    }[];
  }[];
}[];

export const contentList: ContentList = [
  {
    key: 'components',
    menus: [
      {
        key: 'kakaoMap',
        pages: [
          {
            key: 'basic-map',
            href: '#basic-map',
            title: '지도 생성하기'
          },
          {
            key: 'move-map',
            href: '#move-map',
            title: '지도 이동시키기'
          },
          {
            key: 'change-level',
            href: '#change-level',
            title: '지도 레벨 바꾸기'
          },
          {
            key: 'map-info',
            href: '#map-info',
            title: '지도 정보 얻어오기'
          },
          {
            key: 'disable-map-drag-move',
            href: '#disable-map-drag-move',
            title: '지도 이동 막기'
          },
          {
            key: 'enable-disable-zoom-in-out',
            href: '#enable-disable-zoom-in-out',
            title: '지도 확대 축소 막기'
          },
          {
            key: 'set-bounds',
            href: '#set-bounds',
            title: '지도 범위 재설정하기'
          },
          {
            key: 'add-map-click-event',
            href: '#add-map-click-event',
            title: '클릭 이벤트 등록하기'
          },
          {
            key: 'multiple-marker-control',
            href: '#multiple-marker-control',
            title: '여러개의 마커 제어하기'
          }
        ]
      }
    ]
  }
];
