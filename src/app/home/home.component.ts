import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name = 'Chương';
  age = 23;
  fruits = ['Apple', 'Orange', 'Banana'];
  red = 'text-red';
  fruits2 = [
    { name: 'Apple', price: 20, onSale: true },
    { name: 'Orange', price: 10, onSale: false },
    { name: 'Banana', price: 15.275, onSale: false },
  ];

  districts: string[] = ['Select district'];
  VNCities = [
    {
      city: 'Select city',
      district: ['Select district'],
    },
    {
      city: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Thái Bình',
      district: [
        'Thành phố Thái Bình',
        'Huyện Đông Hưng',
        'Huyện Hưng Hà',
        'Huyện Kiến Xương',
        'Huyện Quỳnh Phụ',
        'Huyện Thái Thuỵ',
        'Huyện Tiền Hải',
        'Huyện Vũ Thư',
      ],
    },
    {
      city: 'Hà Nội',
      district: [
        'Quận Ba Đình',
        'Huyện Ba Vì',
        'Quận Bắc Từ Liêm',
        'Quận Cầu Giấy',
        'Huyện Chương Mỹ',
        'Huyện Đan Phượng',
        'Huyện Đông Anh',
        'Quận Đống Đa',
        'Huyện Gia Lâm',
        'Quận Hà Đông',
        'Quận Hai Bà Trưng',
        'Huyện Hoài Đức',
        'Quận Hoàn Kiếm',
        'Quận Hoàng Mai',
        'Quận Long Biên',
        'Huyện Mê Linh',
        'Huyện Mỹ Đức',
        'Quận Nam Từ Liêm',
        'Huyện Phú Xuyên',
        'Huyện Phúc Thọ',
        'Huyện Quốc Oai',
        'Huyện Sóc Sơn',
        'Thị xã Sơn Tây',
        'Quận Tây Hồ',
        'Huyện Thạch Thất',
        'Huyện Thanh Oai',
        'Huyện Thanh Trì',
        'Quận Thanh Xuân',
        'Huyện Thường Tín',
        'Huyện Ứng Hòa',
      ],
    },
    {
      city: 'Thành phố Hồ Chí Minh',
      district: [
        'Quận 1',
        'Quận 2',
        'Quận 3',
        'Quận 4',
        'Quận 5',
        'Quận 6',
        'Quận 7',
        'Quận 8',
        'Quận 9',
        'Quận 10',
        'Quận 11',
        'Quận 12',
        'Quận Bình Tân',
        'Quận Bình Thạnh',
        'Quận Gò Vấp',
        'Quận Phú Nhuận',
        'Quận Tân Bình',
        'Quận Tân Phú',
        'Quận Thủ Đức',
        'Huyện Bình Chánh',
        'Huyện Cần Giờ',
        'Huyện Củ Chi',
        'Huyện Hóc Môn',
        'Huyện Nhà Bè',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  selectDistrict(event: any): void {
    const city = event.target.value;
    if (!city) {
      return;
    }

    // C1
    const districtFilterList = this.VNCities.filter(
      (data) => data.city === city
    );
    if (districtFilterList && districtFilterList.length > 0) {
      this.districts = districtFilterList[0].district;
    }

    // C2
    this.districts =
      this.VNCities.find((data) => data.city === city)?.district || [];
  }
}
