<template>
  <footer>
    <div class="copy_right">@ {{ new Date().getFullYear() }} By Guan Ping Chen</div>
    <div class="contact_info">
      <a href="tel:+886-921-580-071">
        <i class="far fa-mobile"></i>
        +886-921-580-071
      </a>
      <a
        href="&#x6D;&#x61;&#x69;&#x6C;&#x74;&#x6F;&#x3A;&#x72;&#x79;&#x36;&#x30;&#x35;&#x37;&#x37;&#x40;&#x67;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x63;&#x6F;&#x6D;"
      >
        <i class="far fa-envelope"></i>
        &#x72;&#x79;&#x36;&#x30;&#x35;&#x37;&#x37;&#x40;&#x67;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x63;&#x6F;&#x6D;
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/guanping-chen-b1ab23198/" rel="noreferrer">
        <i class="fab fa-linkedin"></i>
        GuanPing Chen
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  color: colors(primary);
  border-top: 1px solid rgb(199, 199, 199);
  box-sizing: border-box;
  i {
    margin-inline-end: 0.5em;
  }
  .contact_info {
    div,
    a {
      color: colors(primary);
      text-decoration: none;
      cursor: pointer;
    }
  }
}
@media screen and (min-width: 601px) {
  footer {
    text-align: center;
    .copy_right {
      margin: 1em;
    }
    .contact_info {
      margin: 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      div,
      a {
        padding: 0 1rem;
        color: colors(primary);
        &:nth-child(1),
        &:nth-child(2) {
          border-right: 1px solid colors(secondary);
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  footer {
    display: flex;
    flex-direction: column-reverse;
  }
  .contact_info {
    margin: 0 1em;
    margin-block-start: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    div,
    a {
      margin-block-end: 1em;
    }
  }
  .copy_right {
    margin: 0 1em;
    margin-block-end: 1em;
  }
}
</style>
