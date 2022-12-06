import React from 'react'

type Props = {}

export default function ScrollSpy({ }: Props) {
    return (
        <div>
            <div className="grid grid-cols-3">
                <div className="col-span-2">
                    <div data-bs-spy="scroll" data-bs-target="#scrollspy1" data-bs-offset="200" className="scrollspy-example">
                        <section id="example-1">
                            <h3 className="text-xl font-semibold pt-5 pb-3">Section 1</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
                                minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
                                quisquam obcaecati et reiciendis quaerat accusamus numquam.
                            </p>
                        </section>

                        <div id="scrollspy1" className="sticky-top pl-3 text-sm">
                            <ul className="nav nav-pills menu-sidebar">
                                <li className="py-1">
                                    <a className="nav-link" href="#example-1">Section 1</a>
                                </li>
                                <li className="py-1">
                                    <a className="nav-link" href="#example-2">Section 2</a>
                                </li>
                                <li className="py-1">
                                    <a className="nav-link" href="#example-3">Section 3</a>
                                    <ul className="nav flex-column pl-3">
                                        <li className="py-1">
                                            <a className="nav-link" href="#example-sub-A">Subsection A</a>
                                        </li>
                                        <li>
                                            <a className="nav-link" href="#example-sub-B">Subsection B</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="py-1">
                                    <a className="nav-link" href="#example-4">Section 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}