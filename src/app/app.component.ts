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
    managers: [{ name: 'Phạm Thị Thúy' }],
    children: [
      {
        name: 'Khối sản xuất',
        managers: [
          {
            name: 'Nguyễn Tiến Dũng',
            avatar:
              'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
          },
          {
            name: 'Nguyễn Phương Thảo',
            avatar:
              'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
          },
        ],
        children: [
          {
            name: 'Trung tâm đào tạo tài năng trẻ',
            managers: [
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
              },
            ],
          },
          {
            name: 'Trung tâm đào tạo siêu đỉnh',
            managers: [
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
              },
            ],
          },
          {
            name: 'Bạn có tài mà',
            managers: [
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
              },
            ],
            children: [
              {
                name: 'Trung tâm đào tạo tài năng trẻ',
                managers: [
                  {
                    name: 'Nguyễn Tiến Dũng',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
                  },
                  {
                    name: 'Nguyễn Phương Thảo',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
                  },
                ],
              },
              {
                name: 'Trung tâm đào tạo siêu đỉnh',
                managers: [
                  {
                    name: 'Nguyễn Tiến Dũng',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
                  },
                  {
                    name: 'Nguyễn Phương Thảo',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
                  },
                ],
              },
              {
                name: 'Bạn có tài mà',
                managers: [
                  {
                    name: 'Nguyễn Tiến Dũng',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
                  },
                  {
                    name: 'Nguyễn Phương Thảo',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
                  },
                ],
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
              'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
          },
        ],
        children: [
          {
            name: 'MTP Entertainment',
            managers: [
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
              },
            ],
          },
          {
            name: 'ICM Entertainment',
            managers: [
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
              },
            ],
          },
          {
            name: 'Chi nhanh HIPHOP',
            managers: [
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
              },
            ],
          },
        ],
      },
      {
        name: 'Trung tâm chăm sóc khách hàng',
        managers: [
          {
            name: 'Đào Thị Anh',
            avatar:
              'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
          },
        ],
        children: [
          {
            name: 'Khối sản xuât',
            managers: [
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
              },
            ],
            children: [
              {
                name: 'MTP Entertainment',
                managers: [
                  {
                    name: 'Nguyễn Tiến Dũng',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
                  },
                  {
                    name: 'Nguyễn Phương Thảo',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
                  },
                ],
              },
              {
                name: 'ICM Entertainment',
                managers: [
                  {
                    name: 'Nguyễn Tiến Dũng',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
                  },
                  {
                    name: 'Nguyễn Phương Thảo',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
                  },
                ],
              },
              {
                name: 'Chi nhanh HIPHOP',
                managers: [
                  {
                    name: 'Nguyễn Tiến Dũng',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
                  },
                  {
                    name: 'Nguyễn Phương Thảo',
                    avatar:
                      'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
                  },
                ],
              },
            ],
          },
          {
            name: 'Khối sản xuât',
            managers: [
              {
                name: 'Nguyễn Tiến Dũng',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
              },
              {
                name: 'Nguyễn Phương Thảo',
                avatar:
                  'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png',
              },
            ],
          },
        ],
      },
    ],
  };
}
