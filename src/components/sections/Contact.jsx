import { useState } from 'react';
import styled from 'styled-components';
import {
  Container,
  Section,
  Title,
  Text,
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Input,
  Textarea,
  FormError,
  AlertBanner,
} from '../ui';
import { brandData } from '../../data/portfolioData';

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const DirectChannels = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const ChannelCard = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateX(4px);
    background-color: ${({ theme }) => theme.colors.surfaceAlt};
  }

  span.label {
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  span.value {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'O nome é obrigatório';
    if (!formData.email.trim()) {
      errs.email = 'O e-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Insira um e-mail válido';
    }
    if (!formData.message.trim()) errs.message = 'A mensagem não pode estar vazia';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simula envio de mensagem com feedback visual
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 900);
  };

  return (
    <Section id="contato">
      <Container>
        <ContactGrid>
          <ContactInfo>
            <Badge $variant="primary">Contato</Badge>
            <Title as="h2" $size="3xl">
              Vamos construir algo incrível juntos?
            </Title>
            <Text $size="lg" $variant="secondary">
              Tem um projeto em mente, busca uma parceria técnica ou precisa de uma consultoria frontend especializada? Envie uma mensagem ou entre em contato diretamente.
            </Text>

            <DirectChannels>
              <ChannelCard href={`mailto:${brandData.social.email}`}>
                <span className="label">E-mail Direto</span>
                <span className="value">{brandData.social.email} ↗</span>
              </ChannelCard>

              <ChannelCard href={brandData.social.github} target="_blank" rel="noopener noreferrer">
                <span className="label">GitHub</span>
                <span className="value">github.com/Genildocs ↗</span>
              </ChannelCard>

              <ChannelCard href={brandData.social.linkedin} target="_blank" rel="noopener noreferrer">
                <span className="label">LinkedIn</span>
                <span className="value">Conectar ↗</span>
              </ChannelCard>
            </DirectChannels>
          </ContactInfo>

          <Card>
            <CardHeader>
              <Title as="h3" $size="xl">
                Enviar Mensagem
              </Title>
            </CardHeader>
            <CardBody>
              {submitted && (
                <AlertBanner $type="success">
                  ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
                </AlertBanner>
              )}

              <Form onSubmit={handleSubmit} noValidate>
                <FormGroup $fullWidth>
                  <Label htmlFor="name">Seu Nome *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Ex: Ana Silva"
                    value={formData.name}
                    $hasError={Boolean(errors.name)}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <FormError>{errors.name}</FormError>}
                </FormGroup>

                <FormGroup $fullWidth>
                  <Label htmlFor="email">Seu E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Ex: ana@exemplo.com"
                    value={formData.email}
                    $hasError={Boolean(errors.email)}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <FormError>{errors.email}</FormError>}
                </FormGroup>

                <FormGroup $fullWidth>
                  <Label htmlFor="message">Sua Mensagem *</Label>
                  <Textarea
                    id="message"
                    placeholder="Conte um pouco sobre sua ideia, objetivo ou projeto..."
                    value={formData.message}
                    $hasError={Boolean(errors.message)}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && <FormError>{errors.message}</FormError>}
                </FormGroup>

                <Button
                  type="submit"
                  $variant="primary"
                  $size="lg"
                  $fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando Mensagem...' : 'Enviar Mensagem 🚀'}
                </Button>
              </Form>
            </CardBody>
          </Card>
        </ContactGrid>
      </Container>
    </Section>
  );
}
