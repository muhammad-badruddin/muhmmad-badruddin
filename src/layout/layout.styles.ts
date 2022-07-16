import styled from "styled-components"

export const layoutMaxWidth = {
    sm: "540px",
    md: "720px",
    lg: "960px",
    xl: "1140px",
    xxl: "1320px",
}

export const SContainer = styled.div<{ fluid: boolean }>`
    width: 100%;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    margin-right: auto;
    margin-left: auto;

    ${(props: any) =>
        !props.fluid &&
        `
    @media (min-width: 576px) {
        max-width: ${layoutMaxWidth.sm};
    }

    @media (min-width: 768px) {
        max-width: ${layoutMaxWidth.md};
    }

    @media (min-width: 992px) {
        max-width: ${layoutMaxWidth.lg};
    }

    @media (min-width: 1200px) {
        max-width: ${layoutMaxWidth.xl};
    }

    @media (min-width: 1400px) {
        max-width: ${layoutMaxWidth.xxl};
    }
    `}
`
