import { faFile, faFolder } from "@fortawesome/free-solid-svg-icons";

export const treeData = [
    {
        value: "root",
        label: "root",
        icon:faFolder,
        children: [
            {
                label: "Level A1",
                value: "Level A1",
                icon:faFolder,
                children: [
                    {
                        label: "Level B1",
                        value: "Level B1",
                        icon:faFolder,
                        children: [
                            {
                                label: "Level C1",
                                value: "Level C1",
                                icon:faFolder,
                                children: [
                                    {
                                        label: "Level D1",
                                        value: "Level D1",
                                        icon:faFile,
                                    }

                                ]
                            }
                        ]
                    },
                    {
                        label: "Level B2",
                        value: "Level B2",
                        icon:faFolder,
                        children: [
                            {
                                label: "Level C2",
                                value: "Level C2",
                                icon:faFolder,
                                children: [
                                    {
                                        label: "Level D2",
                                        value: "Level D2",
                                        icon:faFile,
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                label: "Level A3",
                value: "Level A3",
                icon:faFolder,
                children: [
                    {
                        label: "Level B3",
                        value: "Level B3",
                        icon:faFolder,
                        children: [
                            {
                                label: "Level 3",
                                value: "Level 3",
                                icon:faFolder,
                                children: [
                                    {
                                        label: "Level D3",
                                        value: "Level D3",
                                        icon:faFile,
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: "Level B4",
                        value: "Level B4",
                        icon:faFolder,
                        children: [
                            {
                                label: "Level C4",
                                value: "Level C4",
                                icon:faFolder,
                                children: [
                                    {
                                        label: "Level D4",
                                        value: "Level D4",
                                        icon:faFile,
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
