import {
    Avatar,
    Box,
    Button,
    Card,
    Image,
    
    Flex,
    Heading,
    Icon,
    Text,
  } from "@chakra-ui/react";
  import { FaRegHeart } from "react-icons/fa";
  import { BiMessageAltDetail } from "react-icons/bi";
  import React, {  useEffect, useState } from "react";
  import api from "../libs/api";
import { useDispatch, useSelector } from "react-redux";
import { GET_THREAD } from "../store/types/RootReducer";
import { RootState } from "../store/types";
import { threadSlice } from "../store/slice/ThreadSlice";
import { IThreads } from "../store/types/ThreadInterface";



interface CardPostProps {
  like: number;
}

const CardPost: React.FC<CardPostProps> = (props) => {
  const { like }  = props
  const [liked, setLiked] = useState<boolean>(false);
  const [countLike, setCountLike] = useState<number>(like);
  

  const dispatch = useDispatch();
  const threads = useSelector((state: RootState) => state.threads.data)
  console.log('thr',threads);
 
  
  async function getThreads(){
    try {
      const response = await api.get("/threads")
      console.log(response)
      dispatch(GET_THREAD({data:response.data}))

    } catch (error) {
      throw error
    }
  }
  

useEffect(() => {
  getThreads()
}, [])


  
    const handleLike = () => {
      if (!liked) {
        setLiked(true);
        setCountLike(countLike + 1);
      } else {
        setLiked(false);
        setCountLike(countLike - 1);
      }
    };
    return (
<>
        {threads.map((threads)=> (
          <Card mt={2} p={4} >
        <Box>
          <Flex gap={4}>
            <Box>
              <Avatar name="Dwidyad" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRQXGBcYGxoaGxsYFxcaGBsXGxgbGxsbGhgbICwkGyApIhgYJTYlKS4wMzMzGyI5PjkyPSwyMzABCwsLEA4QHhISHTIpJCoyMjI0MjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAEsQAAIBAgMEBwQHBAcIAQUBAAECAwARBBIhBTFBUQYTImFxgZEyQqGxI1JicoLB0RQz4fAHQ3OSorLCFRYkU2ODk/FUNESjs7QX/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAKREAAgICAgEDAwQDAAAAAAAAAAECEQMhEjFBBCJREyNhMqGxwTNCcf/aAAwDAQACEQMRAD8AYooN0hxNssY+8fyo1u1rHY2cySM3M6eHCut9DYY3IbAvGtL0aw2jSHj2V8BvPr8qAJGTZV3khR4nStzhYAiKg3KAKWK8nR6mXGKiWFFSqKagrsjhFLHcoJPgKY4SFWzy24RjX77foPnRBRQ7YyHq87e1IS5/F/C1FFFGRhyig2PfrcTHCPZis7/2jAhR+FMzfiWi2JxCxRvI5sqKWJ7gL0J6LwMc8sg7bku3cz8L/ZAC+AFaPyY0KipAK4tPUUoaEFp4FdAqLGYkRIWIJ3BVHtM50VV7yaADsjXIQeLdy/x3eRqPaGJ6uMsBdyQiL9aRjlUeFzc9wNSYOEqt3ILt2ntuvyHcBYDw76Go/X4wgax4UeRncW/woT5saIQxg4erRUBvYan6zHVmPeSSfOpwaZ3U+gAeHpyPrUVPQVjEjNz4/Ifz8aTzeVQI99fTw/j+lA+mGNaPDMiXMkt41A35cpaQ+SBvUVnoKVs7sB+tEuJP9bICv9kvZj+Fj51pkmAXvrNdG5A2BjI4ICfEWv8AKjtZhZL1xvUGFbtSff8AkBTl31WwD3DNzdvyFatCl95KoYGf9798/ACrSisy+MYRSCMjrJZmSPzY3bwCgnyopaME/wDaQpUF/wBlj/5j+ifpSo6MZnbeIyRG29uyPPf8KzEC6+FEukU+aQJwQX8z/CqUS2FLI7/TQ1YV6P4fPLmO6MX/ABHQfC9a1RQjo7h8sWY75Dm8uHwtRlRRqkcuWfOTZIoobt17qkQ3ysAfug6/G1EloLA/W4y/uxjTx/k/Cmh8kjRQpYAchTmkI90kfZsT6Gx9L0lqZaVsNGe6Q4sSCOFDfM2eQWIISOxCsDqt2Kb+ANHNlRZY179f0+AFZcgYieSTeM3VxnkqHLcHhdi58q1fajG/MijjoVUd/EAePlRbqIaLZNvE6CpVFDdj4sTXk3A3Eanf1YPtkfaIv4BeN6JkgC5NgKUIncKCzEAAXJOgAG8k0N2aDO4xLghBcQKfqnQysPrON3Je9jVJn/bZCuowsbds6/TSD+rHNBvPPdzo1isSkal5HWOMcyB/PgKIKItsbREMTygXKiyj6znRFHiSPKmbAwnUYcZz2mvJIx4u2pJoGuNGOxMaIpWCE9YS2hdrdliDuFrkX11vWjgbrpL/ANVGdPtyD8l+duRreDUW4FPtHeeHIcB486mtThSpQHAtRYl9yDe3wUe0fy8TUzuFBJNgNTVfCAteRhYtuHJBuH5+dFfJidE4Cs7hLYjEyTnWKLNBFyJ/rpB4nsDuQ86v9IcW6xrFEbTTkxxn6i2vJIe5F18So41Z2Zs9Y0SKMWRFCjuA/P8AWo5JeC+KPlgDod2BLhj7jyRjwBJU+asDWpgN0U/ZHyrLYkGDHseEqLIO94z1bjzUx1p8KwKAjdrbwzG1VTuKYk1UmdmfKjNyUmq2yF+hQ8wT6kmo+kEuWBrb2so8TV+BMqKv1VA9BTeCY3EzCON3O5FZj+EE/lWK6OxNK3WE6Rjqk+/YGZx4aJ4g0c6b4ox4GXLq7jq1AFyS5tu46XqPonhs2GjEZyIqAFiVeRie0SN6i5N8xzXvuG+tdRs1F/8AYI/qClV7/ZifXl/8r/rSqfMajwqR88jMeLE+W4fKrCR5iqD3iF8jv+F6r4ZNKMbAgzS34IL+bbvgD603bPQf28RqoUAAA3AWqdRUa1MtOzzCDHTBIyb20+HE+lC+jB0aRtC+vqd3zqLpRiewUHEhPX2vgDRXYuG+hA503UQoJrKvOqW2do9XDIy+1ayd7tovxN/Kkim9qz3SfGqkkcZ1y/SEC2/UJv5do+YqYwT2DGiMi5hZAN5GpA3+tzV/bGIErJho2Bz2aQg7ogfZuOLEegNYz/aWlxGfMj8r0b2L9GDK3tsb+fIdwFh608jJGumw0YW+iZQLEabhYbuPhrWS2rtx5X/ZwzFL9sxjNKV4qoXe3C/DvO6HG7b61xG0nVoTZnQE5R9leJ+1Wq2fhVijGURvCR7cYvccTIup8TrxvaoSnx6KwhfZVwEk7xqsEceHiAyqXs8gA4CNTYH7xvfhUmIwEUKPPLmldFLZ5TmNxuCL7KXNhoONX2wZX6WElhvI9o27x/WL/iHAn2aBbc2p+0vFBGhJzZnQagsvsIG4qTdiTawXUA3FJcpOg0onNiRSMMl/pZiZJGt7Kk6+migc+4GtpBEqKEUWVRYD+eNUtlYAQpYm7tq7c24AfZG4D8yaICryd9ERV0UhQfbm1xGuVLlyQoC7yx0CL9o/Cgk2YsTydZJ1S+yvakPnovmR8Dyq/LIqKzuQqKCzMdAFAuSe61Vdk4IxxgNYu3acjdmPAdwGg8L8aE7Uf9ql/Z1/cxEGc8HcarCOY4t5ChOSQYxtj9jI00jYuRSDKMkSHfHADcX5M57Z/COFamCLKLceNRYaDKLnf8qsiuW7dsu34Rlem8GVYpwP3UgLf2b/AEb+QujfhqfYOKvnjO9TmHgQL/G/rRramFWSJ43F1ZWVh9lgQfgTWA2ViHjcBj9JGTG3e0ZtfwZSG8GrpwO04k8i0maHbTZ5oIubhj4Ldv8ASPWjZrPbMfrcY8ltI0sO4ubW9F+NaA07+CTMt0pnzTwRD3A8rcrgZFB83v8Ahqh0f2uMPNJG1xDmAuATlZlDlAAL6ZgR94gbheIYjrJp5juzBFN/cjFz4dpmH4aKdFNmZ4lmk3SkyBeJDm65vBcot3VVpKNMAU/3nj+pL/4pP0pUUyDkPQVyo+34GPDUFaXozFaMv9difIaD4Cs05sCe741tMBD1caIOQFNBeTs9XKkol6OuyvlUnl8+FdUVR2jJqF5anxp0rZwGd2i+eeNOQLnxJsPz9a2uBS0aju+etYTZ7dZiJH4cPugkD/LXoUK2UDkB8qEnaHqiKRLODwOh8d1ZbZu3Yg+JaSHrVlew1Ujq0uqrlbdzuDx7q0e3ZCkEjA65bL95uyvndhWd6MwLEJg0ZaWM3RQLsysOyEHMtcHlpQg4p+4PSbasDYOBesZvZjQk2JuAd4BPGw4+FOxuNZxZQQh47iw7uQ+daROiUrIDIRcksUvoWJuWci9zc+yNBzO+lj+jTLGzhsxXUjLYW4ga8Br5VWEoTdth5RvboyEQZpI0AsXdUG/S53+VanZGMmwclmBsd637Ljmp59/rUnQnY/WYrrWW8cAO8aNK4sF78qlmP3lrY7d2fD1dmQlnNkRPaZ7b0v7Nt5O4C99DXPnjHk1ErGfF0+iCbHJEqyRDOJr9Wi7zIeAHurxb6pB52qHZux1iPWysXxEjFiy/WO9EXivDXlfS1QbIjMZKqFlxC9h2veKJd4Fxz35R2id9hY0ew+Hy6klnO9j8lHur3D4nWkhGhJy8IlQHed/Ll+vjTr1BiMUqDtHwA3ms7jNqSTMY4lzkHUA2jT778/sjXu41StW+iaV9F3bO3VjU5TpuuN7H6qDie/8A91S6J4F5W/bJVtvECb8qnQyHmzbgeV+dQYfYwkk6ssZGAHXSWsqIdepjHul/eO/LvOooxtTaO6CBc0jCwCkhUUaZiV9lR3eAoOarXQeNC2/trJ9DEw61tCwBYRKd7sBx5DnUuxnjijVI43YDjo12OpZshZsxOpuKbszYqYdQEjEsp7TOwHtHiXa+UdwuRyO+nYna6xk9ZjIlI92NGcjuJDH/ACiuaUrZeMNaCf7XMfZh9T+T5K4XxR3JEPvX/wBLmgDdLoF/+4kP/ZX87GpB07woBu0jEcBFYn1aw87VjODDd8XxXDn8Uq/kax+3cPJHMJnjRQxVGyOWGcXCsbqLXXs37lrU7K6SQTIp62JHbXqzKucDgCDbXmBcDmd9V+l8iDDSu1ipjbiNXHsW772t4Voyado1eGV+icf0LSkayuzfhXsL/lJ86t7fxohw8kh4KfkSbeQNTbKg6uCKPisaA+Nhf43rOdMZ87RQDczrm+6v0jX7rIB+OuqG2c7AbYZuoigB+kmZYzb60hLSt5DrDXpCIFAUCwAAA5AaCsfsODrcaXPs4eP/APLLoPMIrf3xWtmkyqT6d5OgHmSKbJK3RiTNXKrfs5/5hpUhjxuFMzxrzdfgcx+ANbdfaA+qPidB+dZHZCZp4+4M3wy/6q1uF1zNzY28BoKePRb1buZYZrAk8Kze1sUVjd+J0HidBRnaElgF56nwrJ7bmzME4L2j4nd8KfqNkYQc5JIIYDDBJGQe4iJ4nLcn1Y1t1FYXo8xbMSbnOgv3KoA+Fq3a1Ovagz1JooY5Osmgi4ZjI33Yx2f8bL6UYm2PExzZAjg3EkfYcHnmG/wNweNDtjLnxUsnBAkQ8h1j/Fl9K0gWufI9lYaRTjSVdCVkHP2H9NVY/wB0VWmw00zFcphj3F2KM5HHIqkgHvJ8qMKlOVaSL4u0CUYy7KOmHjWLDws1tAB7IvvZ3YjMeJsbk8t9Adqwz6KX+nmuqhT2so9pmcWKRLocigXNrlr3rYBaFJsZyzSPO2d7AskaKco3IM+cBRyA7zc603LezEWz8LFhYggIsurMfebixNVJNsNJ2YEaT7SgZf757A9Se6iy7BgvmdDI2+8rNJr3BtB5AURWJRuApvqfCBxXkykWxJJDeZzY70jLWP3pTZj4DL51bxYWBVijCK5HZUDsRpxkcDfxsN7HTmRe2rtQxnq4kMkx3KASqA+9JbcO64vzA1ofgOj7sS87tdjdgCM7m3vuNw4ZU3WGttKF8nbYbroqYdmcfs+FU2BPWSNuzHVmkYe0535B52FH9m7Mjw6Hix1d23seZ7uQG7hV6CBUUIihVUWCqAAB3AVMm8UJSvRloxe1YMdi2dYkyxLp22EYJsDZl1cmxBswA1G6sBiUkVzHJ2GDMhAHvKSpG83sRa+6txkxEuNxgSaSNBKqtlZgLCGMAAA7zqaDYjo7KZl7DErbdfKSGuGznQDW5411YsMe5UO8tatGRe31n9B+tT7LwMmJkeJGUZFz3IIG8AA2vz+FHtt9HZIQruUKtvK3sGtexuByOvdWo/o06PqMM+IkTtYlsyXuCIV0TwzXZvAinyxxxjaFc9WnZ5ztDYmIhBZ47qN7Icyjx4gd5AqPYqdZNElrguvDgDc25brV6X0xcYe0cJLSyA5V0JQHQuTy5X/WgXQ3YvVYs5jdoo1zcleQZreShD+KuTir0NyfG2bwT2UsylQBfX+b1hJMR1mJlkY6RJa/JpO2/oqx+tavb+KCplJsD2m7lXX8vhXk+ypZZ5jEp0xb5XB91Cbki24iMMPDwFXg1FWSjByTa8HqHQ3DlcMJGFnnZpm5gPpGPKNUHrRKR80gXggzt943CD/MfIVLK6xoToFQeAAA0FVdloerzt7ch6xu7NbKO6ygac70v5ELlKlSrGPJdh6SO31Yz/ib+FarDLZFHd/GspsYdqTvCD/E9ajHSZVsN508uNUitIp6j/IwfjJxdnO4XPkKyLuWJY72Nz58PIUW23PoIx72rfdG4eZ+RoPxoZH4Oj0mPTkw/wBGx2W/tPyWt1msCeVYTo6ew/3/APStbDamIyQyPyUn4XovpHNkXuf/AEtdFE+jznfIzyf3n7P+ELWiFCNgw5I40+rGi+igUXFcTdsdjhT1pop60GAcK7SFIUTHQK7akKVYw1EA0AA46C2vOn1y9dvWMdArpFIGu1jAZsA8c8k0dnWXIXQnK2dFyh0bcbqFBU29kG9XJcdEoJkVkA1OaNjbzUEHyJq0wphFCVvyZQj3Rm8Vh0xpAkIjwisGOdlR5gNQgS9449e0Wsx3WA1olj+kKZCuDCTPuUIfo1tpqy6G3Ieoq68KneqnxUGmJCiZiqqt9WsAL2Frm2/Snc2xoY4xMkIuojfFYkFpTvUkFnkJsqA7jdrBQNBemdBc7xyYmS2eZ2duQB0AHcFRbd1qrbcx5laWQHsRBo4r7mxD/R5+/KzZB39ZzFE1Ahw0cS6XAH4BoPUAfGmwxtsbPLSRnOm+0T1b2OspEa9ye9/hB8zVX+jTAZ55JSNIlyr9+Tf6KP8AFQTpRjesnKg9mIZfxnVz5dkeRrf9E4BhcAjMLPIDIb/WfVQfBcvpVpbdLwD9GL8v+AltN+tlTDj2fbk5ZFt2T4kqLcieVFSaEdH4jlaVvalswvvEfuDzBL/9y3CipoM5xXpUqVAx5VsBbyEf2fzeiuOnBYknsqN/cN5oNsV7PIfsp8esFM23irKIxvbVvujh5n4A1eOo2VzRcsrX5B2ImzsXPHd3KNw9Pmaij4mmyNYU6EaVBvyejBKNRXgO9HjpKO9T6i3+mjvSaX/gz9pQPUBfzrObAe0jj6yA/wB1rf66LdIn/wCFQfat/jB/Kq/62cGSP3WvyazojtITxI5PbtkfudbX9dD51o1ryDoVtfqMQEY9iUhe4Se6fP2fMcq9eQ31rjapjZIcWPWnrTBUi0CY6kKQropQHaRFdpWpgjagMt7gcDb0Av8AE28qntVTCYYqqg79S33mYs3xY0jGjRchOlSVxRXaIGNNNNOrhpjIaRQLpPjSkaxRm0szZEtvUWu8n4VBPjlHGjpNeJ9I+k0k2KlkifLHYxIw9rq73ZkPu5yN41sF5UKb0i2ODk9GhV4nxEWEi1WLtyMPZXIMqJ3kE5j9zxqzt7aQjSSXgosg58EXzNqDdDMN1cLyWs0pyr/ZrcX8yW/vUM6XY3NIsKnRO2/3yOyPIG/4hXZCPCNk5R55OKBWycCZpooibmR7ue6+ZyfHX1r0vGuJ5FhH7sAlv7JLZv72ieBPKsb0RhyiWdtBqgJ4KNXP5eRrfbAwhVesYWeWzsDvWMX6tDy3liOZastK/kX1E7lS6WgwgsPn/Pw8q7SqrtCfJGTxOg/M+QpUrZEd+2x/WpVg/wDejDfWPpSqnFA2BNnyBXck2GQE+Ck3/wA1CJpi7s597cOQ4DyFqlxROljowse8XDW9VquaS7jR2T9uaxTm+gqeI9mq/vHuFqlhOhHL5UrRXHlvI0ENmPlmjPMlT+IafELRjpA/0KD/AKg/yk/lWdLG1xvFmHiNR8QKObbkDRRuNzOpHgUY08X7WhM0ayxfyZtxXrfQbbv7TDkc/SxAB772X3ZB3G2vffury7B4UyypGPfOp5KBdj6A1ro0kSczYcAPhwiCPQCSLUNGTw0XTvtUpx9thztOXE9MFPWqWzcfHNGssRureRBGhVhwYG4I7quA1E5h9dFNBoB0s2W8qpJGSssZ3gsD1bWzWy66WB05G1zSmSt0aOlWY2fjpE6uObrhIUuGUCeJwCRmvq50AJytbUbr2owuOI4o/crZJD/2pLf5q1haaCFqQFUztGMe23V/2gMfxcAHyqykgIuCCOYNx61jUSUqbmrl6IBxNNNImhXSDbcWDhaWQ9yIPadzuVf14DWiMkZ7+knb/Uw/s8bfSzAg23pFuZu4n2R4k8K8rw+HLssab2IUd1+PkLnyqbH42SeV5pDeSQ3PJR7qLyAGlGuimDuzTEaLdE72Ptt5aL61XFC2db+zjb8h7EzJh4b27MahVHMjRV8SbV57O7MSx7Tu3q7Hh60d6S7Q6x+rU9iMn8Um4n8Oo8Se6qGwYc82fKWEViAN7SscsaC/Ek/CqyfJ8USxx+nByfbNpsXZoPVwf1USq8p4G1yF/EwLH7KkcRW1iBtc7218OQ9Pjehuy8F1SiLQtfrJmG4yHco7uyAPsoL76KGtJ2cTO1i+mm0iU6uM9qU9Wn4vab00v3itLtPFZVyjed/cP41g4JBNiJJz+6iBjj5Fv6xx8r/pTwiKQf7qRf8AMalQ7/et/qfKu01xDTBshugPIg+R/wDdRMKdCbrby/SmLc8D6frUlo6s6cmpI4nGnq1ta5kb6vqR+V6aUbmB4a/OhyVCKE+XJItRtpVwYkNhit7mKRSLfVYm3oSR6ULSLxPj+lPQXYInadiFAHHUGx7tAe61KpHVkbcU3qjR9Doc8kktiAgyC/1msx9AF/vVpMEmWWUfWCMPPOD8R8RTNkYIQxLHvOpY83OrH9O4CrUhykPwGjfdNtfIgHwvTZI3CjkWTlO2JJmwshmQFon/AH8ai50062MfXA9oe8BzArYYeZXVXRgyMAysDcEHcQazQqvg8UcExOpwrG7qNepY75EH/LJ1ZeGrDjXGmWnG9m0Brt6YjggEEEEAgixBB1BB4ipA/h6CnJAmaUJicpAAkisuml85JA8TfzIqeWUGwN7WOnAtfiOI3UD6d7QkifCZFTKwkBLIp7YylVDEHLcZzpxUcrUI2n0yKQXUDrnbIt1FlNrs7Ach5E24GueeOTevIU1QfmcrfsgDiVAU1Fgp+rZmjtvu6gWV+88m7/W9eU4o9Y+d2LSHXOSQ9+YI1Hluons3pBPCdSJVOlpDZ7XG6QDXd7wJ76d+nlHaYFNHtMEwdQy7iL9/gRwI3Wp96w3R/pvhMrrM7Qm5YCRTltlF7Ol1OoJtcE33UM29/SOzApg1yjd1sgGbxSPcPFvSqJN+Box5OkbPpF0kgwaZpGu5HYjWxkfwHAfaOgrxna23JcbKZZTu0jQE5I132XmTpdt59BQ3G4lpGZ5HZmOru5JZu65/kbqbh8QgAve28nKba99qoo0Wx8YypvovwQszKi+25yr3cye4C58q0+1MUuGjWCI9vLa/FV4uftE3t33PCg+yNoRRI8wZXlPYjS/aA4sw3gG2/kBxNUZZD2ndszsbsTxP5DuqqfGOu2VaWad+F+5WxL5Rp4Dxrd9DdmdTEJ5Bcgnq10u8zdkkfdv1Y7y55Vkujey2xOIFzljjs8jfVW/D7R3Dv8K9S2WgkcOFyxRDJGo3AgZSfIaeN+6tBeTm9Tl5Ol0E8JCUWzG7ntOebHf5DQDuAruJnCKWPkOZqR3ABJNgN9Zra20RZnY5UUE68AN58aeMeTOQFdIcc5AijP0spKg/VFu057lHxtQzbeWDCdWml7RrzsdWJ7yM3mavbOgYs08gs8gsqn3IvdXxPtHvNuFZvpVis8wQboxb8ban4ZR61V6VgAtKu0qnYxOFsfHT9KkTQkefrUbCkTcX4jf4fzrUe0emtFi9MZb7vOmxxXrRbB2KJLSSD6Leqn+s7z9j/N4b162xpTpFXZWwHmXMWMcZ3EC7v3rfcvfx4ab72ztnQwTMyhzl7CEguSRbrH7IsNWCbh7Lc602Jl6uNntfKCQOZ91R4mw86zYljVyjyKCtl3rnOW7Ochvq7ZiNNc/fWg23ZxZZX2aKCdWBIvobG6spBsDuYDgRUja7xe/Du76r4RCIxm9om7feY6jy3eVU9u7V6iO4F3e4QHdfme4D8hxrpulbOWthLDS5SI2/AT7wHu3+sB6jXgbXa87wPSJiSmIOaNvfUBWja9wezwBsQRqLA61sMJtdOrJkcZlIU5desJF0aNR7WYa2F9bjhXFkhu0dcJ6phHZeK/ZD1bH/AIZj2T/yGJ3f2RJ/Afsns6ysM2KkYdmBbEbpJQNORCq3pUmytoYnDXUxiWG/ZjR7yxDkjOAJE5KSCNwNtKKhKuhZOPhmk6RbMGKw7xbmtmjbisqklG9dD3EivDMTimlIdiUCLlOgvnNs9r3tqAPKvWNt9N4YsPJIgk60DLGkkMqXkY2W7MoUgXubHUA2rx7DOSy5zc3dj3tmOvqSaaCYkh5RjuEnizIPha9Qh33KxPgS/wAQoHxq5K4LBeG89/IVYBA7vlVKEBywTNvew77fIX+dOj2WBqXby0v86vlxz/X0rjSeXifyrcUayKPBxruUeevzqxUDubXzegt5a3rqAqL3vxI4+RomIsVhAe0nZcagjj3HnUcJaUoFFy1gBzNXwaIdD4lBlsLyq2VRyRhmB7he9z3AeOUbZSOSUYtJml2Ps/q41w8R1azSPxJ3Fu4Dco4WJ11rZRxrGgUWCqLdwAqhs7CrBGWkPabUnjfkB+VD8djzJoNF5c+81bjel0RbH7Rx5c2Hsj495rPA9fJf+qjbTlJKp396qR5t4aj9tbSLyLhom7TsFdhvUe8qnna5J4Dv3HoowihVFlUAADcANBTqukAix+KEUbSH3Re3M7gPM2Feds5YlmN2Ykk8yTcmj3SrH53ESnsobt3vbQeQPqe6gFJN2zIVKlSpBiyqEmw31McKbgDVvh4Vcw0Vh3mpY0O9fbdsieJ0v5b/ACrnvZ67ioxtjej2CWWQxuRlj1K31extl8Ad/iOdejYbBE6toOA4n9BQ7BdHI0SIg5JY/YcWvm3nONzhrm6nnpbfRgY0ICZrRZdSzG0ZHNXOnkbHu4kS3s4ZTbA2011ROBkBPggZx/iVary4lVNrnNf3UdiL9kXyggHleoF21FiMVkiDFER3LMLXJZF7KnW2p1NvCoI0EgdrAl2uLrfQ6Kf7uT0qmPUSU3bCUOIUnKAwKgNYgjsnMFN+OoPpWM6WYrNicl9IlCeDN2m9Rk9K12E1eRjb2ggIFuzGN1rn32esHJg5cQ02IjQvHmYkj3hfTIPeKra9uXPSnm3xEXZzZ0IeeJTuMiAjgRmvY0Sw4jl65lj6qSJXIeJ2UHVhqm4d5G+5odsJ74mDW95FseY1q9sO3V4xra9X/qaliFmr6L4syYSJybsAFJ71OUk/OjHveI+R/jWU6AyXhkj+qQR4Mg/MNWqv7J/nUfwq0HcUI+zMf0g/uoR/1QbeEbmsHuJP1Sb+BAJrYdPZ7yRR/VVpD4sQqn/C9ZKLe3fY+t/0qc+wo6Ws3cdPPhTpBcWubUxUuCp4fLgf55U6NrjXeNDQMJp2Qd3NbD1FNMpO4eZP6U5txvusfSoYINBmJ8L2tQMdRmzAMedraa0XVrig0iAFSODDjffpRLDNrasgksehK+Y8P4US6MY0QYxWIusqFLcOsHaQn0YedDnG48vkf5+FNxCki6+0pDKeTqbr8RTAPRcRiGc3Y3+Q8BWY6QbdyXijPb3Mw93uH2vl47qO2+kzGNBErL1ihi7KRofaVDzG4sL2+NAcNE7siBTdzZeKnwYXB57+BqrmukDiaHojgrs0pGi9hfvHVj6WF+80a23tIQx3HttcIO/ix7h+lclmjwkKjfYWUcXbeT6m5PCsZjMU8rl3Op9AOAHdRb4qgEJPEm5OpJ3knea5SpVMIqVKlWCGwTuuaLbCw7SSOUjzmNciZriNSR2mdrdwAA1Ou4aiLE7HlijaVshVBqAxLa6aAqAdSONU8DtqSFl6i4AA6wOSVd9LsV9w8BbW1r1zRR35sqaqLNvhMNh+ymITNKdB14DC/KK908lObnTNr9Eo5h2ZpY8uoVneSJTzCO3Z/CRan7E2xHiwyMlmAuyMAykXtcHiPGrqHJDIFvYGQC5JsM7AAEm9hwHCqcUcXJmN6HYLLjpYrg/QyC4vYnPCwOuvHXzor/seNRlvJpoF6xwBbS3ZI0FvhQvoZiL7TPeJk9LEXPAkR3t3V6BtOOJEaSTQ8CvtG50UD3iTYc91GLSdMzMtiUCoIk0MhyC172NyzXPIZjc8fGr0ESooRFCqoAAAsABuAqHDwnMZHFmIsBcHIm/LcaEnQkjkBqADXcQ4sb+yNDbexvYIo4knT4b91rrYlWAMdsyNZosRErXMgYxxqWzqAS8ioNRw3b78SwoPBCsMWLzTRnMgCjNlcdo6NGwDKdRvrfYHDEEyP7baW4InBB8yeJ7gLN2nEGsSASFcC45qP0rnWS5Ui7x1GzFdA3KTOhzDPGCMylfYPC4F/brcn2fA/n+lDsYv/EYZ+6VPJlVv9FESp1HA8fKuiCpUQkYnpPsvEy4p2SFnXKiqyslrAXN8zCxuzUBx2zZIHAkUKXS6gG/sk3BI0v2huJ316tGRlB3frVDamy48QAsgNtSrA2dWtvB/I6HjSuHk1nlkxykNw4+H82PrXZDlObhuPhwNHtp9GZ4ycg61OaDtAcmj4/hv4Cs7GeCkMOROo7qm9BJ2FxSNhv8AjVfIR7pA7m0+O6nLl3lW05gkDz1FYJySS9gAbFl14bwfOiGG30PZlLJltvJ07geVEcNvrIBYYXpqHT+d9SVGvEd/z/k0xivNOBGYSu5+sVr7lIYFbeJbyNEtlBMMhmkH0jj6OPccp99hwvz5eNqG4vssj2Bsbai413XHHUDSmgmQ52Ytfje5PnQTp2M+h80jTOzyyMD7pC50UfVyXBA71JOuoqBYHIZgpZFNi6gld19RbMu/3gKuBa4twexmzcMmbOfDLqfCl5NbNSKINdq/tXCNGsLsgTrA4JVywZ0I1YHVJNTmGouPEVQp4y5KxWqYqVKlTGNHtTa8sqCJyMpIZrLY2XcL33E2P4aHKttKRbMzNzNh90aD8z50mb1+XjUUis2uTo0/QYfTS/2Y/wA4o9j9oIsZQdp3kkAVdWJ61zlA5m3kLk2rK9GpZYy5jjdjKoVGtZTlNyb7lXUdo+V63GxNhrETLIQ8rXJb3VvvCA7h37zvNNdEwbgdjHDRwSFCZI5FZ1jF7l1eN92/WS9+6iMuDlkbrZBqPYS+iA6EgcWtpc87Deb2sTCUN0v4DeP4UOxG0WIs12QnLkX2pG/5anlzPceANDrZuyOLFx2JY5UB1fUs/ARxgcSdMw14DXUTQ4Qk9ayZB7iaERg6a294jS+4bhxJtRbK6wiSQgS+4E9iIcFUe8ebHfwsNKv4PNqj2PyI/nhUck2y8IpKwaKr4oeyOZYf4TRqTZwOqtbuIvVHF4eNZIQz6NIwO4f1Uh7+IFLj1JDydxYBxntYU/8AU+cUn6UZOFkNrI1iCb2PCqiKoOGbeFeEn7zfRn4ua3L30IF7H4EEV1ynxOSjFuLDwt86c6jjRzar4WBTNiWjRe++rclQayN3AXrzjbW1p9pO0OCwzrCozOqBBI6k2BkJICKdbICSbG97EDfVXwbicxPSSGbEJhlYiAtkd1Ng7H2UB3iMmwLDfcW01rPdJsGiYyZQigXQqALWBjQWFt2oNQ43Yc0R+kw06j2WzQyBbHjnC5Tbx4mocbtAzSZmN3VER2vfMyZlznvK5b996lbcrZTXGiuYyNxv3Hf6/wA+NOwwIG6xJJty4D4AVPAt7g7q5JHbwp6JlaQXkB+yfiRVzDcaqW7Xl+dXMMN9FGLFM97xHy/90+o34ePz/kUTDZ72Ft4IYfeU5h8RW32ZhMLLGJpVjeSQZ3a2W2YXCjuAsO+16w8h39wPqd3899U8Bs95JOqQkXJv2mAC7yxAO4X8zYVLIrKw3o32D2dg3leQRqIlUBQzPldr3ZwpNrAWA560l2nhIpHeKNQSuRFiQdZKb3JCqLlRYAG3FjutQ89HkldMNGZGZgDI7SO2SIGxYqWy5mIsBa287ga9E2V0ehgUCONE0AOVRma3133se81CWisVZ5idpRyyAYyMoih1WOVXVy0jZnkBIADDRVANwAdbm9A9qYPqZGjDiRdGRwQc8beyTbS+hB7xXvM+DjdSjxo6nerqGB8Qd9ZHbn9HcEgL4a0L/V1MZ7rb08tO6jDJxYk4WeVUq1f/APn+O+pF/wCUUq6PrIl9MDDcAN2gGlyeACjif51rTbA6LtIQ8q6DXIdR4yH3j9ndzvwJ9H+j6qczHM/FuC/ZQcPHefhWtRVVbDQCi1xFsijwyoABxIBPdv8AIaVZDltF3cT+lQgZmFxYamppHtoCF0uW0si8Trpzt/ClbCV8VIqq2pCiwdh7bMdBGnEsxIGm69hqbhYDZouZZFUORZUX2Y4+CLbjoCx4nuAp2DgzlZCLKv7pDvAO+Rr++1zv1APMtRJRSNjrQ1IgKRi1vxqUCnAUlDKRWliZtL2HqfLhQ3aOFjUwsR7MyZixJNmVkNyfvCjlqE7egHVqb2+lgHrPGPzrJbG5aop47DxDDOUy50Z2Wx35JWZB8F9KtTbcklAGCjz3H72QERLpvUaGQ7uS/a4VLFsw9oZhYMeHMA/nV2DCFdM7eAsB6G9WdPyQPHul2zcT+1hZHkmllsIy1iRJpdECgKiG6mwA0zX3V6R0f2dHgMNZjdzZpGUXaSU2AVRvOtlVfCm41QNpo8gGX9mPVsdwkEjdab8DkMfkT31dw30jCZxZRcxg8ARYyMOBYXtyU8CxAyQS9HtNxvgmHiIj/lkNedf0r4YNJDiVjkUFeqkLxsq3BLRnNbLrmkG/6tGNqf0gRxSNGsbShdCylQL8u0R/PpQ/a3T7C4jDSYebDzBJFtmBjJRr3Vx2t6sA3lWoxgsMdDUrLVHDSEb940Iq8rg7qdClDEJZgf5sas4Y76bjEuPhTcE9/wCeIrGLlMm9k92vprXSaR1omIlXcOJ1PzP5CjHRXayYWeQyC6yx6aXYyIcyIo5tmYAcSFoPh1Ot9+7yG79a5iCylJENnRlZTydSGU+opJq0MnTPaujmzGijLyW66U55CNwYjsxr9lFso8CeNFzWBw39JSSBAsHasOsDyBLPxEYCsWXfqbeFRv03kmY9TliUaZWCvLcbywOii+4Abtb62EVhlLpFXkS8m/IpVgZOkeMGV3kBi3EwxIsoN7XYSFlKjjYjyo/gNvZt5EqjUmNGSVBzkgbtEfaS/hbWllilHtGjkjLph+lVD/bWG/8AkRf+VP1pUlDg/ZfseZ+QqzP7vjSpV2z7OVE49v8AD+dVNpfuZ/w/JKVKphQVp4pUqmOPFPFKlWMKh23f3Q/tcP8A/wBEdcpVghGLe/3v9K1JSpUyEMj06/qPvSf/AKZKM7W/dy/dPypUqogHhw3n7zf5jTZ/ZbwPypUqASrHvP3V/OreH3+VKlTx6Ax+J3edV8J7XmflSpVgF4VGN9KlRCdT2m8vlTcR7JpUqBgLit48fzohhP8A6iL75+QpUqfF/YH0z0LZ/seZ+dDdifv4f7Z/zpUqfN0QwfqZ6HSpUq4DuP/Z"  />
            </Box>
            <Box color="black">
              <Flex gap={1} alignItems="center">
                <Heading size="m">{threads.user?.full_name}</Heading>
                <Text color="black">@{threads.user?.username}</Text>
                <Icon boxSize={2}  mt={1} viewBox="0 0 200 200" >
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    color="green"
                  />
                </Icon>
                <Text color="gray" fontSize={14}>
                  {threads.createdAt}
                </Text>


              </Flex>
              <Text>{threads.content}</Text>
                <Image src={threads.image} alt="image" width={200} height={200} />
              <Flex gap={2} mt={2} alignItems="center">
                <Button onClick={handleLike} bg="white">
                  <Flex gap={2}>
                    <FaRegHeart color={liked ? "red" : "gray"} size={21} />
                    <Text color="gray" fontSize={16}>
                      {countLike}
                    </Text>
                  </Flex>
                </Button>
                <Button bg="white">
                  <Flex gap={2}>
                    <BiMessageAltDetail color="gray" size={25} />
                    <Text color="gray" marginTop="2px" fontSize={15}>
                      {threads.number_of_replies} Replies
                    </Text>
                  </Flex>
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Card>
    ))}
    
        
        </>
        )}
  export default CardPost