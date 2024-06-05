import {
  Container,
  Heading,
  Divider,
  Button,
  Text,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Slider,
  SliderMark,
  SliderFilledTrack,
  SliderTrack,
  SliderThumb,
  Stack,
  Switch,
  Checkbox,
  useToast,
  Tooltip,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  UnorderedList,
  ListItem,
  Link,
  List
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { SectionX, SectionY } from '../../components/section'
import { Formik, Form, Field } from 'formik'
import { BiBookAlt } from 'react-icons/bi'
import { SiCashapp, SiRoblox } from 'react-icons/si'

const Commissionform = () => {
  const [sliderValue, setSliderValue] = useState(5)
  const [assets, setAssets] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [paytyp, setPayType] = useState(false)
  const toast = useToast()
  const [paystring, setPayString] = useState('k Robux')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [termsAccepted, setTerms] = useState(false)

  function validateName(value) {
    let error
    if (!value) {
      error = 'Value is required'
    }
    return error
  }

  function termPage() {
    onClose()
    if (!termsAccepted == true) {
      setTerms(true)
      toast({
        title: `Terms Accepted`,
        status: 'success',
        isClosable: false,
        duration: 2000
      })
    } else {
      toast({
        title: `Terms Already Accepted`,
        status: 'warning',
        isClosable: true,
        duration: 2000
      })
    }
  }

  const OverlayTwo = () => (
    <ModalOverlay
      bg="blackAlpha.400"
      backdropFilter="blur(5px) hue-rotate(90deg)"
      backdropBlur="2px"
    />
  )

  function PayChange() {
    setPayType(!paytyp)
    if (paytyp == false) {
      setPayString('$ USD')
      let slidertext = document.getElementById('PaySlide')
      slidertext.innerHTML = `${sliderValue}$ USD`
    } else if (paytyp == true) {
      setPayString('k Robux')
      let slidertext = document.getElementById('PaySlide')
      slidertext.innerHTML = `${sliderValue}k Robux`
    }
  }
  function updateMark(val) {
    setSliderValue(val)
    let slidertext = document.getElementById('PaySlide')
    slidertext.innerHTML = `${val}${paystring}`
  }

  return (
    <Container>
      <Heading
        as="h1"
        fontSize={45}
        fontFamily="monospace"
        mb={4}
        bgClip="text"
        bgGradient="linear(to-l, #7928CA,#FF0080)"
      >
        Commission Form
      </Heading>
      <Divider my={6} />
      <Heading
        as="h1"
        fontSize={23}
        mb={4}
        fontFamily="monospace"
        bgClip="text"
        bgGradient="linear(to-l, #7928CA,#FF0080)"
      >
        User Info:
      </Heading>

      <Formik
        initialValues={{}}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            if (submitted == true) {
              toast({
                title: `You Have Already Submitted This Form`,
                status: 'warning',
                isClosable: false,
                duration: 2000
              })
              actions.setSubmitting(false)
              return
            }
            if (termsAccepted == false) {
              toast({
                title: `You Must Read My Terms`,
                status: 'warning',
                isClosable: false,
                duration: 5000
              })
              actions.setSubmitting(false)
              return
            }
            let embeds = [
              {
                title: `Commission Request From : ${values.robloxname} : ${values.discordname}`,
                color: 800080,
                description: `Project Description: \n ${values.description}`,
                fields: [
                  {
                    name: `Group:`,
                    value: `${values.group}`
                  },
                  {
                    name: `Email:`,
                    value: `${values.email}`
                  },
                  {
                    name: `Assets Complete:`,
                    value: `${assets}`
                  },
                  {
                    name: `Price:`,
                    value: `${sliderValue}${paystring}`
                  },
                  {
                    name: `Deadline:`,
                    value: `${values.deadline}`
                  }
                ]
              }
            ]
            let datatosend = JSON.stringify({ embeds })
            var configforax = {
              method: 'POST',
              url: process.env.web_hook_url,
              headers: { 'Content-Type': 'application/json' },
              data: datatosend
            }
            axios(configforax)
              .then(response => {
                toast({
                  title: `Your Form Has Been Submitted I Will Get Back To You`,
                  status: 'success',
                  isClosable: false
                })
                setSubmitted(true)
                actions.setSubmitting(false)
              })
              .catch(error => {
                toast({
                  title: `Your Form Failed To Submit`,
                  status: 'error',
                  isClosable: false
                })
                actions.setSubmitting(false)
                let embeds = [
                  {
                    title: `Commission Request Errored`,
                    color: 800080,
                    description: `Lol Imagine You Actually went too in depth`
                  }
                ]
                let datatosend = JSON.stringify({ embeds })
                var configforax = {
                  method: 'POST',
                  url: process.env.web_hook_url,
                  headers: { 'Content-Type': 'application/json' },
                  data: datatosend
                }
                axios(configforax).then(response => {})
              })
          }, 1000)
        }}
      >
        {props => (
          <Form>
            <SectionY amount={15}>
              <Field name="robloxname" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel fontFamily="monospace" htmlFor="robloxname">
                      Roblox Username
                    </FormLabel>
                    <Input
                      {...field}
                      id="robloxname"
                      placeholder="CatboyNyako"
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="discordname" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel fontFamily="monospace" htmlFor="discordname">
                      Discord Tag
                    </FormLabel>
                    <Input
                      {...field}
                      id="discordname"
                      placeholder="Nyako#0001"
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel fontFamily="monospace" htmlFor="email">
                      Email
                    </FormLabel>
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="catboynyako@gmail.com"
                    />
                    <FormHelperText>
                      This is only if I can&apos;t get in contact with you on
                      Discord
                    </FormHelperText>
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </SectionY>
            <Divider my={6} />
            <Heading
              as="h1"
              fontSize={23}
              fontFamily="monospace"
              mb={4}
              bgClip="text"
              bgGradient="linear(to-l, #7928CA,#FF0080)"
            >
              Project Info:
            </Heading>
            <SectionY amount={15} delay={0.3}>
              <Field name="description" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel fontFamily="monospace" htmlFor="description">
                      Please Write A Detailed Description Of The Project
                    </FormLabel>
                    <Textarea
                      {...field}
                      id="description"
                      placeholder="Try To Make It As Detailed As Possible"
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <br />
              <Field name="group" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel fontFamily="monospace" htmlFor="group">
                      If the Project Is For A Group Then Put The Group Link
                      Otherwise Put : Not For Group
                    </FormLabel>
                    <Input {...field} id="group" placeholder="Group link" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <br />
              <Field name="assets">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <Checkbox
                      fontFamily="monospace"
                      id="assets"
                      colorScheme="purple"
                      onChange={val => setAssets(val.target.checked)}
                    >
                      Are All The GUI&apos;s, Model&apos;s or anything else
                      required done?
                    </Checkbox>
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <br />
              <Field name="deadline" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel fontFamily="monospace" htmlFor="deadline">
                      Is There A Deadline You Would Want This Done By?
                    </FormLabel>
                    <Input {...field} id="deadline" placeholder="Deadline" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <br />

              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="payment" mb="0">
                  Payment Type:
                </FormLabel>
                <Switch id="payment" onChange={PayChange} />
              </FormControl>
              <br />
              <Text fontSize={16} fontFamily="monospace">
                What Do You Think A Fair Price For The Project Is?
              </Text>
              <Slider
                id="mainslide"
                colorScheme="purple"
                aria-label="slider-ex-6"
                onChange={val => updateMark(val)}
                defaultValue={5}
                min={5}
                step={5}
                max={100}
              >
                <SliderMark
                  id="PaySlide"
                  value={sliderValue}
                  textAlign="center"
                  bg="transparent"
                  color="white"
                  mt="5"
                  ml="-5"
                  w="15"
                  fontFamily="monospace"
                >
                  {sliderValue}
                  {paystring}
                </SliderMark>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <br />
              <br />
              <Stack>
                <Button
                  mt={4}
                  colorScheme="pink"
                  variant="outline"
                  onClick={onOpen}
                >
                  Commission Terms
                </Button>
                <Button
                  mt={4}
                  colorScheme="purple"
                  isLoading={props.isSubmitting}
                  loadingText="Submitting"
                  type="submit"
                  variant="outline"
                >
                  Submit Form
                </Button>
              </Stack>
            </SectionY>
          </Form>
        )}
      </Formik>
      <Modal
        onClose={onClose}
        size={'xl'}
        isOpen={isOpen}
        motionPreset="slideInRight"
        colorScheme="purple"
      >
        <OverlayTwo />
        <ModalContent colorScheme="purple">
          <ModalBody colorScheme="purple">
            <Heading
              as="h1"
              fontSize={45}
              mb={4}
              bgClip="text"
              bgGradient="linear(to-l, #7928CA,#FF0080)"
            >
              My Terms
            </Heading>
            <Divider my={6} />
            <SectionX delay={0.1} amount="15">
              <Heading
                as="h3"
                bgGradient="linear(to-l, #A020F0,#A020F0)"
                bgClip="text"
                variant="section-title"
              >
                Hiring Terms
              </Heading>

              <Text>
                I will need to know in detail exactly what you want I don&apos;t
                want to waste your time or my own making something that doesnt
                satisfy you. <br /> If you want to see more of my work you may
                dm me: Nyako#0001 <br /> <br />
                <UnorderedList>
                  <ListItem>
                    I require assets like GUI&apos;s, Models, ect to be made and
                    ready otherwise I will wait until they are to complete the
                    project
                  </ListItem>
                  <ListItem>
                    If I am gonna need to work with someone else please add them
                    to a group chat with me
                  </ListItem>
                  <ListItem>
                    Don&apos;t be mean or try to rush me I will let you know way
                    before hand if I will be done by the deadline
                  </ListItem>
                  <ListItem>
                    I won&apos;t refund you if you try bending my agreement
                  </ListItem>
                  <ListItem>
                    I dont provide hosting for bots but if you need help setting
                    up your bot I will help you
                  </ListItem>
                  <ListItem>
                    If any other project terms apply then we will talk them over
                    before I accept your project
                  </ListItem>
                </UnorderedList>
              </Text>
            </SectionX>
            <SectionX delay={0.1} amount="-15">
              <Heading
                as="h3"
                bgGradient="linear(to-l, #FF0080,#FF0080)"
                bgClip="text"
                variant="section-title"
              >
                Payment Terms
              </Heading>

              <Text>
                <UnorderedList>
                  <ListItem>
                    I accept two forms of payment : USD, Robux
                  </ListItem>
                  <ListItem>
                    I require a 25% deposit of the final payment (which will be
                    refunded if I cant complete the order but wont be refunded
                    if you cancel while I am making it)
                  </ListItem>
                  <ListItem>
                    Depending on the project payment can be done through
                    Percentage
                  </ListItem>
                  <ListItem>
                    I don&apos;t charge extra if you want something changed
                    however if I have already finished the project and you want
                    a large portion of it changed I may charge more
                  </ListItem>
                  <ListItem>
                    I am pretty lenient on when I accept payment
                  </ListItem>
                  <ListItem>
                    I will refund your deposit if I can&apos;t complete your
                    project{' '}
                  </ListItem>
                </UnorderedList>
                <br />
                The Accounts Money Will Be Sent To
                <List>
                  <ListItem>
                    <Link
                      href="https://www.roblox.com/users/337146660/profile"
                      target="_blank"
                    >
                      <Button
                        variant="ghost"
                        colorScheme="purple"
                        leftIcon={<SiRoblox />}
                      >
                        CatboyNyako
                      </Button>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://cash.app/$nyakonii" target="_blank">
                      <Button
                        variant="ghost"
                        colorScheme="purple"
                        leftIcon={<SiCashapp />}
                      >
                        $nyakonii
                      </Button>
                    </Link>
                  </ListItem>
                </List>
              </Text>
            </SectionX>
            <SectionX delay={0.1} amount="15">
              <Heading
                as="h3"
                bgGradient="linear(to-l, #A020F0,#A020F0)"
                bgClip="text"
                variant="section-title"
              >
                What I am able to do
              </Heading>
              <Text>
                I AM NOT TAKING LONG TERM COMMISSIONS RIGHT NOW <br />
                I am able to do alot of things when you make your request if its
                in the realm of something I have done before it will be
                completed pretty quickly. <br />
                If it is something that I havent done before I will still be
                willing to take your project on and try to make it I will do
                this for free only requesting payment if I succeed in making
                your project
                <UnorderedList>
                  <br />
                  <ListItem>
                    Discord Bots (Varying Complexities if you want a bot with
                    roblox verification then I will require you to have a
                    server)
                  </ListItem>
                  <ListItem>Basic Roblox Systems</ListItem>
                  <ListItem>API&apos;s connecting Roblox to Discord</ListItem>
                  <ListItem>I can also do a group of small scripts</ListItem>
                  <ListItem>
                    If what you want is not listed here you can still send a
                    form I will let you know if I will attempt it or not
                  </ListItem>
                </UnorderedList>
              </Text>
            </SectionX>
          </ModalBody>
          <Button
            onClick={termPage}
            mt={2}
            mb={4}
            mr={5}
            ml={5}
            colorScheme="purple"
            variant="outline"
            size="md"
          >
            Accept
          </Button>
        </ModalContent>
      </Modal>
    </Container>
  )
}

export default Commissionform
