import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  organizationData = {
    name: 'Công ty cổ phần HIPHOP quá tuyệt vời quá đỉnh quá xịn quá vip',
    managers: [
      {
        name: 'Nguyễn Tiến Dũng',
        avatar:
          'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
      },
    ],
    extend: true,
    children: [
      {
        name: 'Khối sản xuất',
        managers: [
          {
            name: 'Nguyễn Tiến Dũng',
            avatar:
              'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
          },
          {
            name: 'Nguyễn Phương Thảo',
            avatar:
              'https://cdn.oneesports.vn/cdn-data/sites/4/2022/02/hinh-nen-Luffy-2K-chat-ngau.jpg',
          },
          {
            name: 'Nguyễn Tiến Dũng',
            avatar:
              'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
          },
          {
            name: 'Nguyễn Phương Thảo',
            avatar:
              'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
          },
          {
            name: 'Nguyễn Tiến Dũng',
            avatar:
              'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
          },
          {
            name: 'Nguyễn Tiến Dũng',
            avatar:
              'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
          },
          {
            name: 'Nguyễn Phương Thảo',
            avatar:
              'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
          },
          {
            name: 'Nguyễn Tiến Dũng',
            avatar:
              'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
          },
        ],
        children: [
          {
            name: 'Khối doanh nghiệp vừa và lớn',
            managers: [
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
            ],
          },
          {
            name: 'Viện đào tạo và nghiên cứu công nghệ',
            managers: [
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
            ],
            children: [
              {
                name: 'Phòng đào tạo',
                managers: [
                  {
                    name: 'Nguyễn Tiến Dũng',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
                  },
                  {
                    name: 'Nguyễn Phương Thảo',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
                  },
                ],
                children: [
                  {
                    name: 'Phòng nghiên cứu công nghệ',
                    managers: [
                      {
                        name: 'Nguyễn Tiến Dũng',
                        avatar:
                          'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
                      },
                      {
                        name: 'Nguyễn Phương Thảo',
                        avatar:
                          'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'Khối sản xuất',
            managers: [
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
            ],
          },
        ],
      },
      {
        name: 'Khối kinh doanh',
        managers: [
          {
            name: 'Nguyễn Đình Mạnh',
            avatar:
              'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
          },
        ],
        children: [
          {
            name: 'Phòng kinh doanh sản phẩm AMIS NSĐH',
            managers: [
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
            ],
          },
          {
            name: 'Phòng kinh doanh sản phẩm AMIS Kế toàn',
            managers: [
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
            ],
          },
          {
            name: 'Phòng kinh doanh sản phẩm Hộ cá thể',
            managers: [
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
            ],
            children: [
              {
                name: 'Nhóm kinh doanh Wonderfull',
                managers: [
                  {
                    name: 'Nguyễn Tiến Dũng',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
                  },
                  {
                    name: 'Nguyễn Phương Thảo',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
                  },
                ],
              },
              {
                name: 'Nhóm kinh doanh Awesome',
                managers: [
                  {
                    name: 'Nguyễn Tiến Dũng',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
                  },
                  {
                    name: 'Nguyễn Phương Thảo',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
                  },
                ],
              },
              {
                name: 'Nhóm kinh doanh Redoubtable',
                managers: [
                  {
                    name: 'Nguyễn Tiến Dũng',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
                  },
                  {
                    name: 'Nguyễn Phương Thảo',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
                  },
                ],
              },
            ],
          },
          {
            name: 'Khối văn phòng hành chính',
            managers: [
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
            ],
          },
        ],
      },
      {
        name: 'Khối sản xuất',
        managers: [
          {
            name: 'Nguyễn Tiến Dũng',
            avatar:
              'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
          },
          {
            name: 'Nguyễn Phương Thảo',
            avatar:
              'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
          },
        ],
        children: [
          {
            name: 'Khối doanh nghiệp vừa và lớn',
            managers: [
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
            ],
          },
          {
            name: 'Viện đào tạo và nghiên cứu công nghệ',
            managers: [
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
            ],
            children: [
              {
                name: 'Phòng đào tạo',
                managers: [
                  {
                    name: 'Nguyễn Tiến Dũng',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
                  },
                  {
                    name: 'Nguyễn Phương Thảo',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
                  },
                ],
                children: [
                  {
                    name: 'Phòng nghiên cứu công nghệ',
                    managers: [
                      {
                        name: 'Nguyễn Tiến Dũng',
                        avatar:
                          'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
                      },
                      {
                        name: 'Nguyễn Phương Thảo',
                        avatar:
                          'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'Khối sản xuất',
            managers: [
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
            ],
          },
        ],
      },
      {
        name: 'Trung tâm tư vấn và hỗ trợ khách hàng',
        managers: [
          {
            name: 'Đào Thị Anh',
            avatar:
              'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
          },
        ],
        children: [
          {
            name: 'Trung tâm hỗ trợ khách hàng doanh nghiệp',
            managers: [
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
            ],
            children: [
              {
                name: 'MTP Entertainment',
                managers: [
                  {
                    name: 'Nguyễn Tiến Dũng',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
                  },
                  {
                    name: 'Nguyễn Phương Thảo',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
                  },
                ],
              },
              {
                name: 'ICM Entertainment',
                managers: [
                  {
                    name: 'Nguyễn Tiến Dũng',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
                  },
                  {
                    name: 'Nguyễn Phương Thảo',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
                  },
                ],
              },
              {
                name: 'Chi nhanh HIPHOP',
                managers: [
                  {
                    name: 'Nguyễn Tiến Dũng',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
                  },
                  {
                    name: 'Nguyễn Phương Thảo',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
                  },
                ],
              },
              {
                name: 'Chi nhanh HIPHOP',
                managers: [
                  {
                    name: 'Nguyễn Tiến Dũng',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
                  },
                  {
                    name: 'Nguyễn Phương Thảo',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
                  },
                ],
              },
            ],
          },
          {
            name: 'Trung tâm hỗ trợ khách hàng cá nhân và hộ cá thể',
            managers: [
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png',
              },
            ],
          },
        ],
      },
    ],
  };
}
