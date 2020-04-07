const Routes = [
    {
        key: "1",
        name: "第一页",
        path: "/one",
        exact: false,
        visible: true,
        children: [
            {
                key: "3",
                name: "son1",
                path: "/son1",
                exact: true,
                visible: true,
                layoutOption: {
                    header: true,
                    footer: true,
                    menu: true
                }
            },
            {
                key: "4",
                name: "son2",
                path: "/son2",
                exact: true,
                visible: true,
                layoutOption: {
                    header: true,
                    footer: true,
                    menu: true
                }
            }
        ]
    },
    {
        key: "2",
        name: "第二页",
        path: "/tow",
        exact: true,
        visible: true,
        layoutOption: {
            header: true,
            footer: true,
            menu: true
        }
    },
]

export default Routes;