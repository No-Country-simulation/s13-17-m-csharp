import React from 'react'

const Valoracion = () => {
    return (
        <section className="flex flex-wrap items-center">
            <span className="flex justify-start">
                <img
                className="w-6 object-fill"
                src="data:image/png;base64,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"
                />
                <img
                className="w-6"
                src="data:image/png;base64,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"
                />
                <img
                className="w-6"
                src="data:image/png;base64,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"
                />
                <img
                className="w-6"
                src="data:image/png;base64,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"
                />
                <img
                className="w-6"
                src="data:image/png;base64,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"
                />
            </span>
            <a
            href="#"
            className="ml-2 text-xs underline text-color-secondary-text md:text-sm">
            Valoraciones (12)
            </a>
        </section>
    )
}

export default Valoracion